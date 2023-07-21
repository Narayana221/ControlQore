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



SELECT * FROM Movie
SELECT * FROM GenreGroup
SELECT * FROM MovieLanguage
SELECT * FROM Genre
SELECT * FROM [Language]
SELECT * FROM Customer
SELECT * FROM PaymentName
SELECT * FROM SeatCategory 

CREATE TYPE EntityName  AS TABLE
(
  [name] VARCHAR(30)
)
GO


CREATE TYPE Screen  AS TABLE
(
  [ScreenName] VARCHAR(30)
)
GO
CREATE TYPE Seat  AS TABLE
(
  [ScreenName] VARCHAR(30),
  [SeatName] VARCHAR(30),
  SeatCategoryId INT 
)
GO


DECLARE @i Screen
DECLARE @j Seat

INSERT INTO @i 
SELECT 'Vanitha'
UNION ALL 
SELECT 'Vineetha'


INSERT INTO @j 
SELECT 'Vanitha','1',1
UNION ALL 
SELECT 'Vineetha','1',1
UNION ALL 
SELECT 'Vanitha','1',1
UNION ALL 
SELECT 'Vineetha','1',1


SELECT * FROM TheatreSeat


EXEC AddTheatreDetails 'PVR',1,@screens = @i,@theatreseats = @j 

GO
CREATE OR ALTER PROCEDURE AddTheatreDetails
@Name VARCHAR(30),
@cityID int,
@screens AS Screen READONLY,
@theatreseats AS Seat READONLY
AS 
BEGIN
   INSERT INTO Theatre VALUES(@Name,@cityID)
   declare @theatreID int = SCOPE_IDENTITY()

   DECLARE @inserted Table (
	InsertedId INT,
	[Name] varchar(30)
   )

   INSERT INTO Screen (  ScreenName,TheatreID ) 
   OUTPUT inserted.ScreenID,inserted.ScreenName INTO @inserted
   SELECT [ScreenName],@theatreID FROM @screens
      
   INSERT INTO TheatreSeat(SeatNumber,SeatCategoryID,ScreenID)
   SELECT SeatName,SeatCategoryId,i.InsertedId
   FROM @theatreseats t 
   INNER JOIN @inserted i 
	ON i.Name = t.ScreenName 
END

DECLARE @ScreenTemp EntityIds

INSERT INTO @ScreenTemp 
SELECT 'SANGEETHA'
UNION ALL
SELECT 'SARITHA'


DECLARE @TheatreSeatTemp EntityIds

INSERT INTO @TheatreSeatTemp 
SELECT 1