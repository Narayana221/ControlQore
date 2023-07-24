USE BookMyShow

CREATE TYPE EntityIds  AS TABLE
(
  Id INT
)
GO

DECLARE @generic EntityIds
GO
CREATE PROCEDURE AddMovieDetails
@MovieName VARCHAR(30),
@Duration FLOAT,
@Director VARCHAR(30),
@GenreID AS EntityIds READONLY,
@LanguageID AS EntityIds READONLY
AS 
BEGIN
   INSERT INTO Movie(MovieName,Duration,Director) VALUES(@MovieName,@Duration,@Director)
   declare @MovieID int = SCOPE_IDENTITY()

   INSERT INTO GenreGroup             
   SELECT Id,@MovieID FROM @GenreID

   INSERT INTO MovieLanguage
   SELECT Id,@MovieID FROM @LanguageID
END

DECLARE @genretemp EntityIds

INSERT INTO @genretemp 
SELECT 3
UNION ALL
SELECT 5

SELECT * FROM @genretemp

DECLARE @languagetemp EntityIds

INSERT INTO @languagetemp 
SELECT 1




--EXEC AddMovieDetails  @MovieName= 'Mission Impossible',@Duration=126,@Director='Rutherford' ,
--@GenreID= @genretemp, @LanguageID=@languagetemp


--EXEC AddMovieDetails @MovieName= 'Nightmare in Elm Street',@Duration=100,@Director='stinefield' ,
--@GenreID= @genretemp, @LanguageID=@languagetemp
--EXEC AddMovieDetails @MovieName= 'Conjuring',@Duration=157,@Director='Johnny ken' ,
--@GenreID= @genretemp, @LanguageID=@languagetemp
EXEC AddMovieDetails @MovieName= 'Friends',@Duration=90,@Director='Mary Thomas' ,
@GenreID= @genretemp, @LanguageID=@languagetemp


GO
CREATE PROCEDURE AddCustomerDetails
@CustomerName VARCHAR(30),
@phone BIGINT,
@email VARCHAR (30)
AS 
BEGIN
   INSERT INTO Customer VALUES(@CustomerName,@phone,@email)  
END

EXEC AddCustomerDetails 'Narayanan',9400320711,'narayanankunjunni@gmail.com'
EXEC AddCustomerDetails 'Ruby',9735622534,'ruby009@gmail.com'
EXEC AddCustomerDetails 'Christina',7979665653,'cris@gmail.com'
EXEC AddCustomerDetails 'Hari',8909878766,'hari78787@gmail.com'
EXEC AddCustomerDetails 'Aisha',9446567711,'aisha@gmail.com'


GO
CREATE PROCEDURE AddPaymentDetails
@PaymentName VARCHAR(30)
AS 
BEGIN
   INSERT INTO PaymentName VALUES(@PaymentName)  
END
EXEC AddPaymentDetails 'Credit Card'
EXEC AddPaymentDetails 'Debit Card'
EXEC AddPaymentDetails 'UPI'



GO
CREATE PROCEDURE AddCityDetails
@CityName VARCHAR(30),
@zipcode BIGINT
AS 
BEGIN
   INSERT INTO City VALUES(@CityName ,@zipcode)  
END

EXEC AddCityDetails 'Kochi',682038
EXEC AddCityDetails 'Trivandrum',767454
EXEC AddCityDetails 'Kolakata',909876
EXEC AddCityDetails 'Banglore',123233
EXEC AddCityDetails 'Hyderabad',487264

GO
CREATE PROCEDURE AddSeatCategoryDetails
@Name VARCHAR(30),
@price FLOAT
AS 
BEGIN
   INSERT INTO SeatCategory VALUES(@Name ,@price)  
END


EXEC AddSeatCategoryDetails 'Recliner',600
EXEC AddSeatCategoryDetails 'Prime',400
EXEC AddSeatCategoryDetails 'Classic PLus',260
EXEC AddSeatCategoryDetails 'Classic',200

USE [BookMyShow]
GO


CREATE TYPE Screen  AS TABLE
(
  [ScreenName] VARCHAR(30),
   TotSeats INT
   )
GO
CREATE TYPE Seat  AS TABLE
(
  [ScreenName] VARCHAR(30),
  [SeatName] VARCHAR(30),
  SeatCategoryId INT 
)
GO

CREATE OR ALTER  PROCEDURE AddTheatreDetails
@Name VARCHAR(30),
@cityID int,
@screens AS Screen READONLY,
@theatreseats AS Seat READONLY
AS 
BEGIN
   INSERT INTO Theatre VALUES(@Name,@cityID)
   declare @theatreID int = SCOPE_IDENTITY()

   DECLARE @Temp_inserted Table (
	InsertedId INT,
	[Name] varchar(30)
   )

   INSERT INTO Screen (  ScreenName,TheatreID,TOTSEATS) 
   OUTPUT inserted.ScreenID,inserted.ScreenName INTO @Temp_inserted
   SELECT [ScreenName],@theatreID,TotSeats FROM @screens
   
  
   INSERT INTO TheatreSeat(SeatNumber,SeatCategoryID,ScreenID)
   SELECT SeatName,SeatCategoryId,i.InsertedId
   FROM @theatreseats t 
   INNER JOIN @Temp_inserted i 
	ON i.Name = t.ScreenName 
END
GO


DECLARE @i Screen
DECLARE @j Seat

INSERT INTO @i 
SELECT 'AUDI-1',300
UNION ALL 
SELECT 'AUDI-2',350
UNION ALL 
SELECT 'AUDI-3',400



INSERT INTO @j 
SELECT 'AUDI-1','1',1
UNION ALL 
SELECT 'AUDI-1','2',1
UNION ALL 
SELECT 'AUDI-1','3',1
UNION ALL 
SELECT 'AUDI-1','1',2
UNION ALL 
SELECT 'AUDI-1','2',2
UNION ALL 
SELECT 'AUDI-1','3',2
UNION ALL 
SELECT 'AUDI-1','1',3
UNION ALL 
SELECT 'AUDI-2','1',2
UNION ALL 
SELECT 'AUDI-2','2',2
UNION ALL 
SELECT 'AUDI-2','1',3
UNION ALL 
SELECT 'AUDI-2','2',3
UNION ALL 
SELECT 'AUDI-2','3',3
UNION ALL 
SELECT 'AUDI-3','1',1
UNION ALL 
SELECT 'AUDI-3','1',2

--EXEC AddTheatreDetails @Name='PVR', @cityID = 1, @screens = @i, @theatreseats = @j
EXEC AddTheatreDetails @Name='Cinepolis', @cityID = 1, @screens = @i, @theatreseats = @j

SELECT * FROM Theatre
SELECT * FROM Screen
SELECT * FROM TheatreSeat
SELECT * FROM SeatCategory
select * from Movie
select * from MovieLanguage
select * from Projection
SELECT * FROM Show
GO
CREATE OR ALTER PROCEDURE AddShowDetails
  @date DATETIME,
  @showtime DATETIME,
  @screenID INT,
  @movieProjectionID INT,
  @movieLanguageID INT

  AS
  BEGIN
     INSERT INTO Show VALUES(@date,@showtime,@screenID,@movieProjectionID,@movieLanguageID) 

  END
  GO

  alter table show alter column [date] date
 EXEC AddShowDetails @date = '2023-06-21', @showtime = '2023-06-21 09:30:00', @screenID = 18,
                     @movieProjectionID = 4, @movieLanguageID = 2
 EXEC AddShowDetails @date = '2023-06-21', @showtime = '2023-06-21 12:30:00', @screenID = 19,
                     @movieProjectionID = 2, @movieLanguageID = 5
 EXEC AddShowDetails @date = '2023-06-21', @showtime = '2023-06-22 01:00:00', @screenID = 18,
                    @movieProjectionID = 3, @movieLanguageID = 7




select * from Show 
select * from Customer

SELECT * FROM Theatre
SELECT * FROM Screen
SELECT * FROM TheatreSeat
SELECT * FROM SeatCategory
select * from Movie
select * from MovieLanguage
select * from Projection
SELECT * FROM Show



GO
CREATE OR ALTER PROCEDURE AddBookingDetails
@NumOfSeats INT,
@price FLOAT,
@showID INT,
@CustomerID INT,
@TheatreSeatID AS EntityIds READONLY,
@paymentID INT
AS 
BEGIN
   INSERT INTO Booking VALUES(@NumOfSeats,@price,@showID,@CustomerID)
   declare @BookingID int = SCOPE_IDENTITY()

   INSERT INTO BookedSeat            
   SELECT @BookingID,Id FROM @TheatreSeatID

   INSERT INTO Payment 
   VALUES( @BookingID,@paymentID )
END

DECLARE @i EntityIds

--INSERT INTO @i
--SELECT 37
--UNION ALL 
--SELECT 38
--UNION ALL 
--SELECT 39




INSERT INTO @i
SELECT 41






--EXEC AddBookingDetails @NumOfseats = 2, @price = 1210 , @showID = 3, @customerID  = 1, @TheatreSeatID = @i ,@paymentID = 3

--EXEC AddBookingDetails @NumOfseats = 3, @price = 1100 , @showID = 4, @customerID  = 2, @TheatreSeatID = @i ,@paymentID = 1

EXEC AddBookingDetails @NumOfseats = 1, @price = 1210 , @showID = 4, @customerID  = 3, @TheatreSeatID = @i ,@paymentID = 1

SELECT * FROM Booking

SELECT * FROM BookedSeat

select * from payment

--calculated price of customer 1
SELECT sum(sc.price)
FROM BookedSeat bs
inner join Booking b
ON BS.BookingID = B.BookingID
inNER JOIN TheatreSeat TH
on TH.TheatreSeatID = bs.TheatreSeatID
INNER JOIN SeatCategory SC
on sc.SeatCategoryID = TH.SeatCategoryID
INNER JOIN Customer C
ON b.CustomerID = c.CustomerID
where c.CustomerID = 1

exec sp_rename 'booking.price','TotPrice','column'

select * from BookedSeat
select * from Booking

DELETE FROM BookedSeat
DELETE FROM Booking

