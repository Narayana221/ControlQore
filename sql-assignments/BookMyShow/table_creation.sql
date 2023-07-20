CREATE DATABASE BookMyShow
USE BookMyShow

CREATE TABLE Movie
(
 MovieID INT IDENTITY(1,1),
 MovieName VARCHAR(30),
 Duration DATETIME,
 Director VARCHAR(30)
 CONSTRAINT PK_Movie PRIMARY KEY(MovieID)
)

CREATE TABLE Customer
(
 CustomerID INT IDENTITY(1,1),
 CustomerName VARCHAR(30),
 Phone BIGINT,
 Email VARCHAR(40)
 CONSTRAINT PK_Customer PRIMARY KEY(CustomerID)
)

CREATE TABLE City
(
 CityID INT IDENTITY,
 CityName VARCHAR(30),
 Zipcode BIGINT,
 CONSTRAINT PK_City PRIMARY KEY(CityID)
)

CREATE TABLE Theatre
(
 TheatreID INT IDENTITY,
 TheatreName VARCHAR(30),
 TotSeats INT,
 CityID INT,
 CONSTRAINT PK_Theatre PRIMARY KEY(TheatreID),
 CONSTRAINT FK_Theatre_City FOREIGN KEY(CityID)
 REFERENCES City(CityID)
)

CREATE TABLE Screen
(
 ScreenID INT IDENTITY,
 ScreenName VARCHAR(30),
 TheatreID INT,
 CONSTRAINT PK_Screen PRIMARY KEY(ScreenID),
 CONSTRAINT FK_Screen_Theatre FOREIGN KEY(TheatreID)
 REFERENCES Theatre(TheatreID)
)

CREATE TABLE SeatCategory
(
 SeatCategoryID INT IDENTITY,
 Name VARCHAR(30),
 Price FLOAT
 CONSTRAINT PK_SeatCategory PRIMARY KEY(SeatCategoryID)
)

CREATE TABLE TheatreSeat
(
 TheatreSeatID INT IDENTITY,
 SeatNumber INT,
 SeatCategoryID INT,
 ScreenID INT,
 CONSTRAINT PK_TheatreSeat PRIMARY KEY(TheatreSeatID),
 CONSTRAINT FK_TheatreSeat_Screen FOREIGN KEY(ScreenID)
 REFERENCES  Screen(ScreenID),
 CONSTRAINT FK_TheatreSeat_SeatCategory FOREIGN KEY(SeatCategoryID)
 REFERENCES  SeatCategory(SeatCategoryID)
)


CREATE TABLE Genre
(
 GenreID INT IDENTITY,
 GenreName VARCHAR(30),
 Price INT,
 CONSTRAINT PK_Genre PRIMARY KEY(GenreID)
)

ALTER TABLE Genre drop column price
CREATE TABLE GenreGroup
(
 GenreGroupID INT IDENTITY,
 GenreID INT,
 MovieID INT,
 CONSTRAINT PK_GenreGroup PRIMARY KEY(GenreGroupID),
 CONSTRAINT FK_GenreGroup_Genre FOREIGN KEY(GenreID)
 REFERENCES  Genre(GenreID),
 CONSTRAINT FK_GenreGroup_Movie FOREIGN KEY(MovieID)
 REFERENCES  Movie(MovieID)
)

CREATE TABLE Projection
(
 ProjectionID INT IDENTITY,
 ProjectionName VARCHAR(30),
 CONSTRAINT PK_Projection PRIMARY KEY(ProjectionID)
)


CREATE TABLE [Language]
(
 LanguageID INT IDENTITY,
 LanguageName VARCHAR(30),
 CONSTRAINT PK_Language PRIMARY KEY(LanguageID)
)

CREATE TABLE Show
(
 ShowID INT IDENTITY,
 [Date] DATETIME,
 ShowTime DATETIME,
 ScreenID INT,
 MovieID INT,
 LanguageID INT,
 ProjectionID INT,
 CONSTRAINT PK_Show  PRIMARY KEY(ShowID),
 CONSTRAINT FK_Show_Screen FOREIGN KEY(ScreenID)
 REFERENCES  Screen(ScreenID),
 CONSTRAINT FK_Show_Movie FOREIGN KEY(MovieID)
 REFERENCES  Movie(MovieID),
 CONSTRAINT FK_Show_Language FOREIGN KEY(LanguageID)
 REFERENCES  [Language](LanguageID),
 CONSTRAINT FK_Show_Projection FOREIGN KEY(ProjectionID)
 REFERENCES  Projection(ProjectionID)
)

CREATE TABLE Booking
(
 BookingID INT IDENTITY,
 NumOFSeats INT,
 Price FLOAT,
 ShowID INT,
 CustomerID INT,
 CONSTRAINT PK_Booking  PRIMARY KEY(ShowID),
 CONSTRAINT FK_Booking_Show FOREIGN KEY(ShowID)
 REFERENCES  Show(ShowID),
 CONSTRAINT FK_Booking_Customer FOREIGN KEY(CustomerID)
 REFERENCES  Customer(CustomerID)
)
Alter table Booking add constraint PK_Booking primary key(Bookingid)

CREATE TABLE BookedSeat
(
 BookedSeatID INT IDENTITY,
 BookingID INT,
 TheatreSeatID INT,
 CONSTRAINT PK_BookedSeat  PRIMARY KEY(BookedSeatID),
 CONSTRAINT FK_BookedSeat_Booking FOREIGN KEY(BookingID)
 REFERENCES  Booking(BookingID),
 CONSTRAINT FK_Booking_TheatreSeat FOREIGN KEY(TheatreSeatID)
 REFERENCES  TheatreSeat(TheatreSeatID)
)

CREATE TABLE Payment
(
 PaymentID INT IDENTITY,
 BookingID INT,
 PaymentNameID INT,
 CONSTRAINT PK_Payment  PRIMARY KEY(PaymentID),
 CONSTRAINT FK_Payment_PaymentName FOREIGN KEY(PaymentNameID)
 REFERENCES  PaymentName(PaymentNameID),
 CONSTRAINT FK_Payment_Booking FOREIGN KEY(BookingID)
 REFERENCES  Booking(BookingID)
)


CREATE TABLE PaymentName
(
 PaymentNameID INT IDENTITY,
 PaymentName VARCHAR(30),
 CONSTRAINT PK_PaymentName  PRIMARY KEY(PaymentNameID)
)


DROP TABLE Screen
DROP TABLE Theatre
DROP TABLE City
DROP TABLE SeatCategory