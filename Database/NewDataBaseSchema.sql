CREATE TABLE Employees (
  id_employee INT(10) NOT NULL AUTO_INCREMENT,
  rol VARCHAR(100) NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  middleName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phoneNumber INT(10) NOT NULL,
  password VARCHAR(20) NOT NULL,
  PRIMARY KEY (id_employee)
);

CREATE TABLE Books (
  id_book INT(10) NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  editorial VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  descrip VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  discount INT(8) NOT NULL,
  stock INT(10) NOT NULL,
  statusC INT(10) NOT NULL,
  PRIMARY KEY (id_book)
);
CREATE TABLE Parcels (
  id_parcel INT(10) NOT NULL AUTO_INCREMENT,
  companyName VARCHAR(100) NOT NULL,
  manager VARCHAR(100) NOT NULL,
  addressP VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY (id_parcel)
);
CREATE TABLE Customers (
  id_customer INT(10) NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(100) NOT NULL,
  middleName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phoneNumber INT(10) NOT NULL,
  password VARCHAR(20) NOT NULL,
  PRIMARY KEY (id_customer)
);
CREATE TABLE orderDetails (
  id_orderDetail INT(10) NOT NULL AUTO_INCREMENT,
  id_book INT(10) NOT NULL,
  id_parcel INT(10) NOT NULL,
  totalObjects INT(10) NOT NULL,
  PRIMARY KEY (id_orderDetail),
  FOREIGN KEY (id_book) REFERENCES Books(id_book),
  FOREIGN KEY (id_parcel) REFERENCES Parcels(id_parcel)
);
CREATE TABLE Payment (
  id_payment INT(10) NOT NULL AUTO_INCREMENT,
  id_customer INT(10) NOT NULL,
  ownerC VARCHAR(100) NOT NULL,
  nCard INT(18) NOT NULL,
  expiryDate DATE NOT NULL,
  cvv INT(3) NOT NULL,
  PRIMARY KEY (id_payment),
  FOREIGN KEY (id_customer) REFERENCES Customers(id_customer)
);
CREATE TABLE Orders (
  id_order INT(10) NOT NULL AUTO_INCREMENT,
  id_orderDetail INT(10) NOT NULL,
  id_customer INT(10) NOT NULL,
  orderDate DATE NOT NULL,
  shippingDate DATE NOT NULL,
  arriveDate DATE NOT NULL,
  shippingAddress VARCHAR(255) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  orderStatus VARCHAR(100) NOT NULL,
  statusC VARCHAR(10) NOT NULL,
  PRIMARY KEY (id_order),
  FOREIGN KEY (id_orderDetail) REFERENCES orderDetails(id_orderDetail),
  FOREIGN KEY (id_customer) REFERENCES Customers(id_customer)
);