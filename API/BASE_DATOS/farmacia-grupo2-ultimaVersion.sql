-- Base de datos Grupo 2
-- Fecha creacion: 22/02/2022

CREATE database Farmacia_Grupo2;
USE Farmacia_Grupo2;

-- -----------------------------------------------------
-- Table `Farmacia`.`proveedores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS proveedores (
  id INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(45) NOT NULL,
  telefono VARCHAR(9) NULL,
  direccion VARCHAR(250) NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Farmacia`.`tipos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS tipos (
  id INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(45) NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Farmacia`.`Personas`
-- -----------------------------------------------------
insert into Personas ( identidad,nombre,apellido,edad,telefono,rtn,direccion,estado,imagen,tipo) 
values('0318200402610','Sandra','Calderon','21','33668853',null,'Siguatepeque',true,null,'EM'),
('1212200100016','Daniela','Vasquez','21','99999999',null,'Marcala',true,null,'EM');

select * from Personas;
CREATE TABLE IF NOT EXISTS Personas (
  id INT NOT NULL AUTO_INCREMENT,
  identidad VARCHAR(13) NOT NULL,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  edad INT NOT NULL,
  telefono VARCHAR(9) NULL,
  rtn VARCHAR(45) NULL,
  direccion VARCHAR(250) NULL,
  estado TINYINT(1) NULL,
  imagen VARCHAR(250) NULL,
  tipo ENUM('CL', 'EM') NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Farmacia`.`sucursal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS sucursal (
  id INT NOT NULL AUTO_INCREMENT,
  ciudad VARCHAR(45) NOT NULL,
  direccion VARCHAR(250) NOT NULL,
  telefono VARCHAR(9) NOT NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Farmacia`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  id_personas INT NOT NULL,
  login VARCHAR(45) NOT NULL,
  correo VARCHAR(250) NOT NULL,
  contrasena VARCHAR(250) NOT NULL,
  estado ENUM('ACTIVO', 'INACTIVO') NULL,
  pin CHAR(4) NULL,
  PRIMARY KEY (id),
  INDEX id_idx (id_personas ASC) VISIBLE,
  CONSTRAINT id
    FOREIGN KEY (id_personas)
    REFERENCES Personas (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Farmacia`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Productos (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  fechavencimiento DATETIME NOT NULL,
  codigobarras VARCHAR(45) NOT NULL,
  descripcion VARCHAR(250) NULL,
  impuesto DOUBLE NOT NULL,
  precio DOUBLE NOT NULL,
  idtipo INT NOT NULL,
  imagen VARCHAR(250) NULL,
  estado TINYINT(1) NULL,
  PRIMARY KEY (id),
  INDEX id_idx (idtipo ASC) VISIBLE,
  CONSTRAINT idtipo
    FOREIGN KEY (idtipo)
    REFERENCES tipos (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Farmacia`.`compras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS compras (
  id INT NOT NULL AUTO_INCREMENT,
  idProveedor INT NOT NULL,
  fecha DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX id_idx (idProveedor ASC) VISIBLE,
  CONSTRAINT idProveedor
    FOREIGN KEY (idProveedor)
    REFERENCES proveedores (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Farmacia`.`detalleCompra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS detalleCompra (
  id INT NOT NULL AUTO_INCREMENT,
  idCompra INT NOT NULL,
  idProducto INT NOT NULL,
  precioCompra DOUBLE NOT NULL,
  cantidad INT NOT NULL,
  PRIMARY KEY (id),
  INDEX id_idx (idCompra ASC) VISIBLE,
  INDEX idproducto_idx (idProducto ASC) VISIBLE,
  CONSTRAINT idcompra
    FOREIGN KEY (idCompra)
    REFERENCES compras (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT idproducto
    FOREIGN KEY (idProducto)
    REFERENCES Productos (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Farmacia`.`Ventas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Ventas (
  id INT NOT NULL AUTO_INCREMENT,
  idClientes INT NOT NULL,
  PRIMARY KEY (id),
  INDEX id_idx (idClientes ASC) VISIBLE,
  CONSTRAINT idC
    FOREIGN KEY (idClientes)
    REFERENCES Personas (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Farmacia`.`detalleVentas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS detalleVentas (
  id INT NOT NULL AUTO_INCREMENT,
  idCarrito INT NOT NULL,
  idProducto INT NOT NULL,
  cantidad INT NOT NULL,
  descuento DOUBLE NOT NULL,
  PRIMARY KEY (id, idCarrito),
  INDEX id_idx (idCarrito ASC) VISIBLE,
  INDEX idprodct_idx (idProducto ASC) VISIBLE,
  CONSTRAINT idCa
    FOREIGN KEY (idCarrito)
    REFERENCES Ventas (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT idprodct
    FOREIGN KEY (idProducto)
    REFERENCES Productos (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `Farmacia`.`Inventario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Inventario (
  id INT NOT NULL AUTO_INCREMENT,
  idProducto INT NOT NULL,
  idCompras INT NOT NULL,
  idVentas INT NOT NULL,
  stock DOUBLE NOT NULL,
  PRIMARY KEY (id),
  INDEX idProducto_idx (idProducto ASC) VISIBLE,
  INDEX idCompras_idx (idCompras ASC) VISIBLE,
  INDEX idVentas_idx (idVentas ASC) VISIBLE,
  CONSTRAINT idProducto2
    FOREIGN KEY (idProducto)
    REFERENCES Productos (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT idCompras2
    FOREIGN KEY (idCompras)
    REFERENCES compras (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT idVentas2
    FOREIGN KEY (idVentas)
    REFERENCES Ventas (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB; 

-- -----------------------------------------------------
-- Table `Farmacia`.`Pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Pedidos (
  id INT NOT NULL AUTO_INCREMENT,
  idVenta INT NOT NULL,
  fechaPedido DATETIME NOT NULL,
  PRIMARY KEY (id),
  INDEX id_idx (idVenta ASC) VISIBLE,
  CONSTRAINT id2
    FOREIGN KEY (idVenta)
    REFERENCES Ventas (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;




-- -----------------------------------------------------
-- Table `Farmacia`.`Entregas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Entregas (
  id INT NOT NULL AUTO_INCREMENT,
  idpedido INT NOT NULL,
  fecha DATETIME NOT NULL,
  estado TINYINT(1) NOT NULL,
  costo INT NULL,
  idsucursal INT NOT NULL,
  PRIMARY KEY (id),
  INDEX id_idx (idpedido ASC) VISIBLE,
  INDEX idsucursal_idx (idsucursal ASC) VISIBLE,
  CONSTRAINT idp
    FOREIGN KEY (idpedido)
    REFERENCES Pedidos (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT idsucursal
    FOREIGN KEY (idsucursal)
    REFERENCES sucursal (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;












