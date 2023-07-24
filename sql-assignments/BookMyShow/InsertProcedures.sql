
GO
CREATE PROCEDURE AddMovieDetails
@MovieID INT = 0,
@MovieName VARCHAR(30),
@Duration FLOAT,
@Director VARCHAR(30),
@GenreID INT
AS 
BEGIN
   INSERT INTO Movie(MovieName,Duration,Director) VALUES(@MovieName,@Duration,@Director)
   SELECT @MovieID = SCOPE_IDENTITY()

   INSERT INTO GenreGroup VALUES(@GenreID,@MovieID)

END 
GO

EXEC AddMovieDetails @MovieName= 'Mission Impossible',@Duration=126,@Director='Rutherford' ,@GenreID= 2;
EXEC AddMovieDetails @MovieName= 'Nightmare in Elm Street',@Duration=100,@Director='stinefield' ,@GenreID= 1;
EXEC AddMovieDetails @MovieName= 'Conjuring',@Duration=157,@Director='Johnny ken' ,@GenreID= 1;
EXEC AddMovieDetails @MovieName= 'Friends',@Duration=90,@Director='Mary Thomas' ,@GenreID= 4;

GO
CREATE PROCEDURE AddGenreDetails
@GenreName VARCHAR(30)
AS 
BEGIN
   INSERT INTO Genre VALUES(@GenreName)
   
END 
GO

EXECUTE AddGenreDetails @GenreName='Horror';
EXECUTE AddGenreDetails @GenreName='Comedy';
EXECUTE AddGenreDetails @GenreName='Romantic';
EXECUTE AddGenreDetails @GenreName='Thriller';
EXECUTE AddGenreDetails @GenreName='Fantasy';

GO
CREATE PROCEDURE AddProjectionDetails
@ProjectionName VARCHAR(30)
AS 
BEGIN
   INSERT INTO Projection VALUES(@ProjectionName)  
END 

EXECUTE AddProjectionDetails @ProjectionName = '2D'
EXECUTE AddProjectionDetails @ProjectionName = '3D'
EXECUTE AddProjectionDetails @ProjectionName = '4DX'
EXECUTE AddProjectionDetails @ProjectionName = 'IMAX'


GO
CREATE PROCEDURE AddLanguageDetails
@LanguageName VARCHAR(30)
AS 
BEGIN
   INSERT INTO Language VALUES(@LanguageName)  
END 


EXECUTE AddLanguageDetails @LanguageName = 'Malayalam'
EXECUTE AddLanguageDetails @LanguageName = 'English'
EXECUTE AddLanguageDetails @LanguageName = 'Hindi'
EXECUTE AddLanguageDetails @LanguageName = 'Telugu'
EXECUTE AddLanguageDetails @LanguageName = 'Tamil'
EXECUTE AddLanguageDetails @LanguageName = 'Malayalam'

CREATE PROCEDURE AddGenreDetailsOutput
@GenreName VARCHAR(30),
@GenreID INT OUTPUT
AS 
BEGIN
   INSERT INTO Genre VALUES(@GenreName)
   SELECT @GenreID = SCOPE_IDENTITY() 
END 
GO

DECLARE @id INT
EXECUTE AddGenreDetailsOutput @GenreName='Action',@GenreID = @id OUTPUT
SELECT @id AS 'Current scope identity'


select * from Genre
go
CREATE PROCEDURE AddLanguageDetailsOutput
@LanguageName VARCHAR(30),
@languageID INT OUTPUT
AS 
BEGIN
   INSERT INTO Language VALUES(@LanguageName) 
    SELECT @languageID = SCOPE_IDENTITY() 
END 

DECLARE @id INT
EXECUTE AddLanguageDetailsOutput @LanguageName = 'Urdu',@languageID = @id OUTPUT
SELECT @id AS 'Current scope identity'

select * from Language

select * from Genre
SELECT * FROM Movie
SELECT * FROM Projection
SELECT * FROM Language

