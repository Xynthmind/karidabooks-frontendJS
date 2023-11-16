CREATE TABLE Libros (
  id_libro INT(11) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  foto VARCHAR(255) NOT NULL,
  editorial VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  descuento INT(5) NOT NULL,
  stock INT(11) NOT NULL,
  PRIMARY KEY (id_libro)
);

CREATE TABLE Categorias (
  id_categoria INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_categoria)
);

CREATE TABLE Libros_Categorias (
  id_libro INT(11) NOT NULL,
  id_categoria INT(11) NOT NULL,
  PRIMARY KEY (id_libro, id_categoria),
  FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

CREATE TABLE Usuarios (
  id_usuario INT(11) NOT NULL AUTO_INCREMENT,
  rol VARCHAR(50) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  apellido_p VARCHAR(255) NOT NULL,
  apellido_m VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contrasena VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_usuario)
);

CREATE TABLE Pedidos (
  id_pedido INT(11) NOT NULL AUTO_INCREMENT,
  id_usuario INT(11) NOT NULL,
  fecha DATE NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id_pedido),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);


CREATE TABLE Paqueterias (
  id_paqueteria INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  encargado VARCHAR(50) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_paqueteria)
);

CREATE TABLE Detalles_Pedidos (
  id_detalle INT(11) NOT NULL AUTO_INCREMENT,
  id_pedido INT(11) NOT NULL,
  id_libro INT(11) NOT NULL,
  id_paqueteria INT(11) NOT NULL,
  cantidad INT(11) NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  fecha_envio DATE NOT NULL,
  fecha_entrega DATE NOT NULL,
  estatus INT(1) NOT NULL,
  PRIMARY KEY (id_detalle),
  FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
  FOREIGN KEY (id_libro) REFERENCES Libros(id_libro),
  FOREIGN KEY (id_paqueteria) REFERENCES Paqueterias(id_paqueteria)
);


//------------------- Después de hacer la base -----------------------
CREATE TABLE Empleados (
  id_empleado INT(11) NOT NULL AUTO_INCREMENT,
  rol VARCHAR(50) NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  apellido_p VARCHAR(50) NOT NULL,
  apellido_m VARCHAR(50) NOT NULL,
  email VARCHAR(80) NOT NULL,
  contrasena VARCHAR(150) NOT NULL,
  telefono INT(18) NOT NULL,
  PRIMARY KEY (id_empleado)
);


CREATE TABLE Clientes (
  id_cliente INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  apellido_p VARCHAR(50) NOT NULL,
  apellido_m VARCHAR(50) NOT NULL,
  email VARCHAR(80) NOT NULL,
  contrasena VARCHAR(150) NOT NULL,
  telefono INT(18) NOT NULL,
  PRIMARY KEY (id_cliente)
);

CREATE TABLE SolicitudCorreos (
  id_correo INT(11) NOT NULL AUTO_INCREMENT,
  id_cliente INT(11) NOT NULL,
  nombreClient VARCHAR(50) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  horario INT(11) NOT NULL,
  descripcion VARCHAR(250) NOT NULL,
  activo INT(1) NOT NULL,
  PRIMARY KEY (id_correo),
  FOREIGN KEY (id_cliente) REFERENCES Usuarios(id_usuario)
);
CREATE TABLE CorreosAtendidos (
  id_correoatend INT(11) NOT NULL AUTO_INCREMENT,
  id_correo INT(11) NOT NULL,
  dateAt DATE NOT NULL,
  PRIMARY KEY (id_correoatend),
  FOREIGN KEY (id_correo) REFERENCES SolicitudCorreos(id_correo)
);
CREATE TABLE SolicitudLlamadas (
  id_llamada INT(11) NOT NULL AUTO_INCREMENT,
  id_cliente INT(11) NOT NULL,
  nombreClient VARCHAR(50) NOT NULL,
  telefono INT(18) NOT NULL,
  horario INT(11) NOT NULL,
  descripcion VARCHAR(250) NOT NULL,
  activo INT(1) NOT NULL,
  PRIMARY KEY (id_llamada),
  FOREIGN KEY (id_cliente) REFERENCES Usuarios(id_usuario)
);
CREATE TABLE LlamadasAtendidas (
  id_llamadaatend INT(11) NOT NULL AUTO_INCREMENT,
  id_llamada INT(11) NOT NULL,
  dateAt DATE NOT NULL,
  PRIMARY KEY (id_llamadaatend),
  FOREIGN KEY (id_llamada) REFERENCES SolicitudLlamadas(id_llamada)
);
CREATE TABLE Productos (
  id_producto INT(11) NOT NULL AUTO_INCREMENT,
  titulo VARCHAR(50) NOT NULL,
  autor VARCHAR(50) NOT NULL,
  precio INT(11) NOT NULL,
  foto VARCHAR(50) NOT NULL,
  sinopsis VARCHAR(150) NOT NULL,
  activo INT(1) NOT NULL,
  PRIMARY KEY (id_producto)
);

//------------------- Después de hacer la base devoluciones -----------------------
CREATE TABLE Devoluciones (
  id_devolucion INT(11) NOT NULL AUTO_INCREMENT,
  id_libro INT(11) NOT NULL ,
  id_usuario INT(11) NOT NULL,
  precio INT(11) NOT NULL,
  num_guia VARCHAR(50) NOT NULL,
  fecha_envio VARCHAR(50) NOT NULL,
  fecha_atencion VARCHAR(50) NOT NULL,
  fecha_recibido VARCHAR(50) NOT NULL,
  motivo_dev VARCHAR(50) NOT NULL,
  metodo_dev VARCHAR(50) NOT NULL,
  estatus_dev VARCHAR(50) NOT NULL,
  PRIMARY KEY (id_devolucion)
  FOREIGN KEY (id_libro) REFERENCES Libros(id_libro)
  FOREIGN KEY (id_usuario) REFERENCES Clientes(id_usuario)
);
------------- Kevin (Usuario Anonimo) ---------------
CREATE TABLE Pedidos (
  id_pedido INT(11) NOT NULL AUTO_INCREMENT,
  id_usuario INT(11) NOT NULL,
  fecha DATE NOT NULL,
  direccion VARCHAR(50) NOT NULL,
  estatus VARCHAR(50) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id_pedido),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Detalles_Pedidos (
  id_detalle INT(11) NOT NULL AUTO_INCREMENT,
  id_pedido INT(11) NOT NULL,
  id_libro INT(11) NOT NULL,
  cantidad INT(11) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id_detalle),
  FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
  FOREIGN KEY (id_libro) REFERENCES Libros(id_libro)
);

CREATE TABLE Metodos_pago (
  id_metodo_pago INT(11) NOT NULL AUTO_INCREMENT,
  id_usuario INT(11) NOT NULL,
  tarjeta INT(11) NOT NULL,
  fecha_expiracion INT(11) NOT NULL,
  cvv INT(3) NOT NULL,
  titular INT(11) NOT NULL,
  PRIMARY KEY (id_metodo_pago),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
