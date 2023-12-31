USE [BookMyShow]
GO
/****** Object:  UserDefinedTableType [dbo].[EntityIds]    Script Date: 25-07-2023 14:19:59 ******/
CREATE TYPE [dbo].[EntityIds] AS TABLE(
	[Id] [int] NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[EntityName]    Script Date: 25-07-2023 14:19:59 ******/
CREATE TYPE [dbo].[EntityName] AS TABLE(
	[name] [varchar](30) NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[Screen]    Script Date: 25-07-2023 14:19:59 ******/
CREATE TYPE [dbo].[Screen] AS TABLE(
	[ScreenName] [varchar](30) NULL,
	[TotSeats] [int] NULL
)
GO
/****** Object:  UserDefinedTableType [dbo].[Seat]    Script Date: 25-07-2023 14:19:59 ******/
CREATE TYPE [dbo].[Seat] AS TABLE(
	[ScreenName] [varchar](30) NULL,
	[SeatName] [varchar](30) NULL,
	[SeatCategoryId] [int] NULL
)
GO
/****** Object:  Table [dbo].[BookedSeat]    Script Date: 25-07-2023 14:19:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookedSeat](
	[BookedSeatID] [int] IDENTITY(1,1) NOT NULL,
	[BookingID] [int] NULL,
	[TheatreSeatID] [int] NULL,
 CONSTRAINT [PK_BookedSeat] PRIMARY KEY CLUSTERED 
(
	[BookedSeatID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Booking]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Booking](
	[BookingID] [int] IDENTITY(1,1) NOT NULL,
	[NumOFSeats] [int] NULL,
	[TotPrice] [float] NULL,
	[ShowID] [int] NOT NULL,
	[CustomerID] [int] NULL,
 CONSTRAINT [PK_Booking] PRIMARY KEY CLUSTERED 
(
	[BookingID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[CityID] [int] IDENTITY(1,1) NOT NULL,
	[CityName] [varchar](30) NULL,
	[Zipcode] [bigint] NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[CityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[CustomerID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerName] [varchar](30) NULL,
	[Phone] [bigint] NULL,
	[Email] [varchar](40) NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[CustomerID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Genre]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[GenreID] [int] IDENTITY(1,1) NOT NULL,
	[GenreName] [varchar](30) NULL,
 CONSTRAINT [PK_Genre] PRIMARY KEY CLUSTERED 
(
	[GenreID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GenreGroup]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GenreGroup](
	[GenreGroupID] [int] IDENTITY(1,1) NOT NULL,
	[GenreID] [int] NULL,
	[MovieID] [int] NULL,
 CONSTRAINT [PK_GenreGroup] PRIMARY KEY CLUSTERED 
(
	[GenreGroupID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Language]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Language](
	[LanguageID] [int] IDENTITY(1,1) NOT NULL,
	[LanguageName] [varchar](30) NULL,
 CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
(
	[LanguageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[MovieID] [int] IDENTITY(1,1) NOT NULL,
	[MovieName] [varchar](30) NULL,
	[Director] [varchar](30) NULL,
	[Duration] [float] NULL,
 CONSTRAINT [PK_Movie] PRIMARY KEY CLUSTERED 
(
	[MovieID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MovieLanguage]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MovieLanguage](
	[MovieLanguageID] [int] IDENTITY(1,1) NOT NULL,
	[LanguageID] [int] NULL,
	[MovieID] [int] NULL,
 CONSTRAINT [PK_MovieLanguage] PRIMARY KEY CLUSTERED 
(
	[MovieLanguageID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Payment]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Payment](
	[PaymentID] [int] IDENTITY(1,1) NOT NULL,
	[BookingID] [int] NULL,
	[PaymentNameID] [int] NULL,
 CONSTRAINT [PK_Payment] PRIMARY KEY CLUSTERED 
(
	[PaymentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentName]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentName](
	[PaymentNameID] [int] IDENTITY(1,1) NOT NULL,
	[PaymentName] [varchar](30) NULL,
 CONSTRAINT [PK_PaymentName] PRIMARY KEY CLUSTERED 
(
	[PaymentNameID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Projection]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Projection](
	[ProjectionID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectionName] [varchar](30) NULL,
 CONSTRAINT [PK_Projection] PRIMARY KEY CLUSTERED 
(
	[ProjectionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Screen]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Screen](
	[ScreenID] [int] IDENTITY(1,1) NOT NULL,
	[ScreenName] [varchar](30) NULL,
	[TheatreID] [int] NULL,
	[TOTSEATS] [int] NULL,
 CONSTRAINT [PK_Screen] PRIMARY KEY CLUSTERED 
(
	[ScreenID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SeatCategory]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SeatCategory](
	[SeatCategoryID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](30) NULL,
	[Price] [float] NULL,
 CONSTRAINT [PK_SeatCategory] PRIMARY KEY CLUSTERED 
(
	[SeatCategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Show]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Show](
	[ShowID] [int] IDENTITY(1,1) NOT NULL,
	[Date] [date] NULL,
	[ShowTime] [datetime] NULL,
	[ScreenID] [int] NULL,
	[ProjectionID] [int] NULL,
	[MovieLanguage] [int] NULL,
 CONSTRAINT [PK_Show] PRIMARY KEY CLUSTERED 
(
	[ShowID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Theatre]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Theatre](
	[TheatreID] [int] IDENTITY(1,1) NOT NULL,
	[TheatreName] [varchar](30) NULL,
	[CityID] [int] NULL,
 CONSTRAINT [PK_Theatre] PRIMARY KEY CLUSTERED 
(
	[TheatreID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TheatreSeat]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TheatreSeat](
	[TheatreSeatID] [int] IDENTITY(1,1) NOT NULL,
	[SeatNumber] [int] NULL,
	[SeatCategoryID] [int] NULL,
	[ScreenID] [int] NULL,
 CONSTRAINT [PK_TheatreSeat] PRIMARY KEY CLUSTERED 
(
	[TheatreSeatID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookedSeat]  WITH CHECK ADD  CONSTRAINT [FK_BookedSeat_Booking] FOREIGN KEY([BookingID])
REFERENCES [dbo].[Booking] ([BookingID])
GO
ALTER TABLE [dbo].[BookedSeat] CHECK CONSTRAINT [FK_BookedSeat_Booking]
GO
ALTER TABLE [dbo].[BookedSeat]  WITH CHECK ADD  CONSTRAINT [FK_Booking_TheatreSeat] FOREIGN KEY([TheatreSeatID])
REFERENCES [dbo].[TheatreSeat] ([TheatreSeatID])
GO
ALTER TABLE [dbo].[BookedSeat] CHECK CONSTRAINT [FK_Booking_TheatreSeat]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK_Booking_Customer] FOREIGN KEY([CustomerID])
REFERENCES [dbo].[Customer] ([CustomerID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK_Booking_Customer]
GO
ALTER TABLE [dbo].[Booking]  WITH CHECK ADD  CONSTRAINT [FK_Booking_Show] FOREIGN KEY([ShowID])
REFERENCES [dbo].[Show] ([ShowID])
GO
ALTER TABLE [dbo].[Booking] CHECK CONSTRAINT [FK_Booking_Show]
GO
ALTER TABLE [dbo].[GenreGroup]  WITH CHECK ADD  CONSTRAINT [FK_GenreGroup_Genre] FOREIGN KEY([GenreID])
REFERENCES [dbo].[Genre] ([GenreID])
GO
ALTER TABLE [dbo].[GenreGroup] CHECK CONSTRAINT [FK_GenreGroup_Genre]
GO
ALTER TABLE [dbo].[GenreGroup]  WITH CHECK ADD  CONSTRAINT [FK_GenreGroup_Movie] FOREIGN KEY([MovieID])
REFERENCES [dbo].[Movie] ([MovieID])
GO
ALTER TABLE [dbo].[GenreGroup] CHECK CONSTRAINT [FK_GenreGroup_Movie]
GO
ALTER TABLE [dbo].[MovieLanguage]  WITH CHECK ADD  CONSTRAINT [FK_MovieLanguage_Language] FOREIGN KEY([LanguageID])
REFERENCES [dbo].[Language] ([LanguageID])
GO
ALTER TABLE [dbo].[MovieLanguage] CHECK CONSTRAINT [FK_MovieLanguage_Language]
GO
ALTER TABLE [dbo].[MovieLanguage]  WITH CHECK ADD  CONSTRAINT [FK_MovieLanguage_Movie] FOREIGN KEY([MovieID])
REFERENCES [dbo].[Movie] ([MovieID])
GO
ALTER TABLE [dbo].[MovieLanguage] CHECK CONSTRAINT [FK_MovieLanguage_Movie]
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_Booking] FOREIGN KEY([BookingID])
REFERENCES [dbo].[Booking] ([BookingID])
GO
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_Booking]
GO
ALTER TABLE [dbo].[Payment]  WITH CHECK ADD  CONSTRAINT [FK_Payment_PaymentName] FOREIGN KEY([PaymentNameID])
REFERENCES [dbo].[PaymentName] ([PaymentNameID])
GO
ALTER TABLE [dbo].[Payment] CHECK CONSTRAINT [FK_Payment_PaymentName]
GO
ALTER TABLE [dbo].[Screen]  WITH CHECK ADD  CONSTRAINT [FK_Screen_Theatre] FOREIGN KEY([TheatreID])
REFERENCES [dbo].[Theatre] ([TheatreID])
GO
ALTER TABLE [dbo].[Screen] CHECK CONSTRAINT [FK_Screen_Theatre]
GO
ALTER TABLE [dbo].[Show]  WITH CHECK ADD  CONSTRAINT [FK_Show_Projection] FOREIGN KEY([ProjectionID])
REFERENCES [dbo].[Projection] ([ProjectionID])
GO
ALTER TABLE [dbo].[Show] CHECK CONSTRAINT [FK_Show_Projection]
GO
ALTER TABLE [dbo].[Show]  WITH CHECK ADD  CONSTRAINT [FK_Show_Screen] FOREIGN KEY([ScreenID])
REFERENCES [dbo].[Screen] ([ScreenID])
GO
ALTER TABLE [dbo].[Show] CHECK CONSTRAINT [FK_Show_Screen]
GO
ALTER TABLE [dbo].[Theatre]  WITH CHECK ADD  CONSTRAINT [FK_Theatre_City] FOREIGN KEY([CityID])
REFERENCES [dbo].[City] ([CityID])
GO
ALTER TABLE [dbo].[Theatre] CHECK CONSTRAINT [FK_Theatre_City]
GO
ALTER TABLE [dbo].[TheatreSeat]  WITH CHECK ADD  CONSTRAINT [FK_TheatreSeat_Screen] FOREIGN KEY([ScreenID])
REFERENCES [dbo].[Screen] ([ScreenID])
GO
ALTER TABLE [dbo].[TheatreSeat] CHECK CONSTRAINT [FK_TheatreSeat_Screen]
GO
ALTER TABLE [dbo].[TheatreSeat]  WITH CHECK ADD  CONSTRAINT [FK_TheatreSeat_SeatCategory] FOREIGN KEY([SeatCategoryID])
REFERENCES [dbo].[SeatCategory] ([SeatCategoryID])
GO
ALTER TABLE [dbo].[TheatreSeat] CHECK CONSTRAINT [FK_TheatreSeat_SeatCategory]
GO
/****** Object:  StoredProcedure [dbo].[AddBookingDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[AddBookingDetails]
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
GO
/****** Object:  StoredProcedure [dbo].[AddCityDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddCityDetails]
@CityName VARCHAR(30),
@zipcode BIGINT
AS 
BEGIN
   INSERT INTO City VALUES(@CityName ,@zipcode)  
END
GO
/****** Object:  StoredProcedure [dbo].[AddCustomerDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddCustomerDetails]
@CustomerName VARCHAR(30),
@phone BIGINT,
@email VARCHAR (30)
AS 
BEGIN
   INSERT INTO Customer VALUES(@CustomerName,@phone,@email)  
END
GO
/****** Object:  StoredProcedure [dbo].[AddGenreDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddGenreDetails]
--@GenreID INT = 0,
@GenreName VARCHAR(30)
AS 
BEGIN
   INSERT INTO Genre VALUES(@GenreName)
   --SELECT @GenreID = SCOPE_IDENTITY()



END 

GO
/****** Object:  StoredProcedure [dbo].[AddGenreDetailsOutput]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddGenreDetailsOutput]
@GenreName VARCHAR(30),
@GenreID INT OUTPUT
AS 
BEGIN
   INSERT INTO Genre VALUES(@GenreName)
   SELECT @GenreID = SCOPE_IDENTITY() 
END 
GO
/****** Object:  StoredProcedure [dbo].[AddLanguageDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddLanguageDetails]
@LanguageName VARCHAR(30)
AS 
BEGIN
   INSERT INTO Language VALUES(@LanguageName)  
END 
GO
/****** Object:  StoredProcedure [dbo].[AddLanguageDetailsOutput]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddLanguageDetailsOutput]
@LanguageName VARCHAR(30),
@languageID INT OUTPUT
AS 
BEGIN
   INSERT INTO Language VALUES(@LanguageName) 
    SELECT @languageID = SCOPE_IDENTITY() 
END 
GO
/****** Object:  StoredProcedure [dbo].[AddMovieDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddMovieDetails]
@MovieID INT = 0,
@MovieName VARCHAR(30),
@Duration FLOAT,
@Director VARCHAR(30),
@GenreID AS EntityIds READONLY,
@LanguageID AS EntityIds READONLY
AS 
BEGIN
   INSERT INTO Movie(MovieName,Duration,Director) VALUES(@MovieName,@Duration,@Director)
   SELECT @MovieID = SCOPE_IDENTITY()

   INSERT INTO GenreGroup             
   SELECT Id,@MovieID FROM @GenreID

   INSERT INTO MovieLanguage
   SELECT Id,@MovieID FROM @LanguageID
END
GO
/****** Object:  StoredProcedure [dbo].[AddPaymentDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddPaymentDetails]
@PaymentName VARCHAR(30)
AS 
BEGIN
   INSERT INTO PaymentName VALUES(@PaymentName)  
END
GO
/****** Object:  StoredProcedure [dbo].[AddProjectionDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddProjectionDetails]
@ProjectionName VARCHAR(30)
AS 
BEGIN
   INSERT INTO Projection VALUES(@ProjectionName)  
END 
GO
/****** Object:  StoredProcedure [dbo].[AddSeatCategoryDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddSeatCategoryDetails]
@Name VARCHAR(30),
@price FLOAT
AS 
BEGIN
   INSERT INTO SeatCategory VALUES(@Name ,@price)  
END
GO
/****** Object:  StoredProcedure [dbo].[AddShowDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[AddShowDetails]
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
/****** Object:  StoredProcedure [dbo].[AddTheatreDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE    PROCEDURE [dbo].[AddTheatreDetails]
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
/****** Object:  StoredProcedure [dbo].[GetBookingAmountDetails]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[GetBookingAmountDetails]
@BookingID INT
AS
BEGIN
SELECT b.BookingID,SUM(sc.price) AS Amount
FROM BookedSeat bs
inner join Booking b
ON BS.BookingID = B.BookingID
inNER JOIN TheatreSeat TH
on TH.TheatreSeatID = bs.TheatreSeatID
INNER JOIN SeatCategory SC
on sc.SeatCategoryID = TH.SeatCategoryID
WHERE B.BookingID = @BookingID
group by b.BookingID


END
GO
/****** Object:  StoredProcedure [dbo].[GetMovieFromLanguageFilter]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE    PROCEDURE [dbo].[GetMovieFromLanguageFilter]
@LanguageName Varchar(30)
AS
BEGIN
SELECT M.MovieName
FROM Language L
INNER JOIN MovieLanguage ML
ON L.LanguageID = ML.LanguageID
INNER JOIN Movie M
ON M.MovieID = ML.MovieID
WHERE L.LanguageName = @LanguageName
END
GO
/****** Object:  StoredProcedure [dbo].[GetMovieFromProjectionList]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE    PROCEDURE [dbo].[GetMovieFromProjectionList]
@ProjectionName Varchar(30)
AS
BEGIN
SELECT P.ProjectionName,m.MovieName,s.ShowTime, T.TheatreName , SC.ScreenName
FROM Show s
INNER JOIN Projection p
ON s.ProjectionID = p.ProjectionID
INNER JOIN MovieLanguage ml
ON ml.MovieLanguageID = s.MovieLanguage
INNER JOIN Movie m
ON ml.MovieID = m.MovieID
INNER JOIN Screen sc
ON SC.ScreenID = S.ScreenID
INNER JOIN Theatre t
ON sc.TheatreID = T.TheatreID
WHERE p.ProjectionName = @ProjectionName

END
GO
/****** Object:  StoredProcedure [dbo].[GetMovieList]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE    PROCEDURE [dbo].[GetMovieList]
@TheatreName Varchar(30)
AS
BEGIN
SELECT s.ShowID,s.ShowTime,t.TheatreName,m.MovieName,sc.ScreenName
FROM Show s
INNER JOIN Screen sc
ON s.ScreenID = sc.ScreenID
INNER JOIn Theatre t
ON sc.TheatreID = t.TheatreID
INNER JOIN MovieLanguage ml
ON ml.MovieLanguageID = s.MovieLanguage
INNER JOIN Movie m
ON ml.MovieID = m.MovieID
WHERE t.TheatreName = @TheatreName

END
GO
/****** Object:  StoredProcedure [dbo].[GetTheatreList]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE    PROCEDURE [dbo].[GetTheatreList]
@MovieName Varchar(30)
AS
BEGIN
SELECT m.MovieName ,t.TheatreName,sc.ScreenName
FROM Show s
INNER JOIN Screen sc
ON s.ScreenID = sc.ScreenID
INNER JOIn Theatre t
ON sc.TheatreID = t.TheatreID
INNER JOIN MovieLanguage ml
ON ml.MovieLanguageID = s.MovieLanguage
INNER JOIN Movie m
ON ml.MovieID = m.MovieID
WHERE m.MovieName = @MovieName

END
GO
/****** Object:  StoredProcedure [dbo].[GetTicketCount]    Script Date: 25-07-2023 14:20:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE   PROCEDURE [dbo].[GetTicketCount]
@BookingID INT
AS
BEGIN
SELECT b.BookingID,COUNT(*) AS Num_of_tickets
FROM BookedSeat bs
inner join Booking b
ON BS.BookingID = B.BookingID
inNER JOIN TheatreSeat TH
on TH.TheatreSeatID = bs.TheatreSeatID
INNER JOIN SeatCategory SC
on sc.SeatCategoryID = TH.SeatCategoryID
WHERE B.BookingID = @BookingID
group by b.BookingID
END
GO
