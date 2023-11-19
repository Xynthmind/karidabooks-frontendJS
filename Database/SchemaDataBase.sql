CREATE DATABASE KaridaBooks;
USE KaridaBooks;

CREATE TABLE Roles (
  id_rol INT NOT NULL AUTO_INCREMENT,
  rol_name VARCHAR(255) NOT NULL,
  rol_number TINYINT NOT NULL,
  status_c INT NOT NULL,
  PRIMARY KEY (id_rol)
);
CREATE TABLE Users (
  id_user INT NOT NULL AUTO_INCREMENT,
  id_rol INT NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  middle_name VARCHAR(100),
  last_name VARCHAR(100) NOT NULL,
  phone_number BIGINT,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(20) NOT NULL,
  status_c INT NOT NULL,
  PRIMARY KEY (id_user),
  FOREIGN KEY (id_rol) REFERENCES Roles(id_rol)
);
CREATE TABLE Cards (
  id_card INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  card_owner VARCHAR(100) NOT NULL,
  card_number BIGINT NOT NULL,
  expiry_date DATE NOT NULL,
  cvv SMALLINT NOT NULL,
  country VARCHAR(100) NOT NULL,
  street VARCHAR(255) NOT NULL,  
  zc VARCHAR(10) NOT NULL,
  PRIMARY KEY (id_card),
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);
CREATE TABLE Addresses (
  id_address INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  country VARCHAR(100) NOT NULL,
  street VARCHAR(255) NOT NULL,
  house_number VARCHAR(10),
  zc VARCHAR(10) NOT NULL,
  delivery_instructions VARCHAR(255),
  PRIMARY KEY (id_address),
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);
CREATE TABLE AsistRequests (
  id_asistreq INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  descript VARCHAR(255) NOT NULL,
  req_type TINYINT NOT NULL,
  att_date DATE,
  att_time VARCHAR(50),
  status_c INT NOT NULL,
  PRIMARY KEY (id_asistreq),
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE Parcels (
  id_parcel INT NOT NULL AUTO_INCREMENT,
  company_name VARCHAR(100) NOT NULL,
  manager VARCHAR(100) NOT NULL,
  address_p VARCHAR(255) NOT NULL,
  email VARCHAR(100) NOT NULL,
  status_c INT NOT NULL,
  PRIMARY KEY (id_parcel)
);
CREATE TABLE Categories (
  id_category INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NOT NULL,
  status_c INT NOT NULL,
  PRIMARY KEY (id_category)
);
CREATE TABLE Books (
  id_book INT NOT NULL AUTO_INCREMENT,
  id_category INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  editorial VARCHAR(100) NOT NULL,
  descrip VARCHAR(100) NOT NULL,
  price DECIMAL(12,2) NOT NULL,
  discount DECIMAL(12,2) NOT NULL,
  stock INT NOT NULL,
  status_c INT NOT NULL,
  PRIMARY KEY (id_book),
  FOREIGN KEY (id_category) REFERENCES Categories(id_category)
);

CREATE TABLE Orders (
  id_order INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_card INT NOT NULL,
  id_address INT NOT NULL,
  id_parcel INT NOT NULL,
  order_date DATE NOT NULL,
  shipping_date DATE NOT NULL,
  arrive_date DATE NOT NULL,
  total DECIMAL(12,2) NOT NULL,
  order_status VARCHAR(100) NOT NULL,
  status_c INT NOT NULL,
  PRIMARY KEY (id_order),
  FOREIGN KEY (id_user) REFERENCES Users(id_user),
  FOREIGN KEY (id_card) REFERENCES Cards(id_card),
  FOREIGN KEY (id_address) REFERENCES Addresses(id_address),
  FOREIGN KEY (id_parcel) REFERENCES Parcels(id_parcel)
);
CREATE TABLE OrdersDetails (
  id_order_details INT NOT NULL AUTO_INCREMENT,
  id_order INT NOT NULL,
  id_book INT NOT NULL,
  amount DECIMAL(12,2) NOT NULL,
  total_objects INT NOT NULL,
  PRIMARY KEY (id_order_details),
  FOREIGN KEY (id_order) REFERENCES Orders(id_order),
  FOREIGN KEY (id_book) REFERENCES Books(id_book)
);