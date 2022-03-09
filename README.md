## About the asignment:

"A school group project where we will create a website for a company that has a number of cinemas around Sweden.
The task is to create a website that represents the cinema in the new location that the cinema has chosen to open up.
SCRUM is used to plan the group work.

**Group A Participants**:
- Lina
- Ammar Ali
- Karim
- Marcus
- Fredric
- John

**Ort (city)**: Luleå

## API Documentation:

### MOVIES

| **Movies** Api route | Description | verb |
| ----------------------------------- | --------------------------------------------- | ---- |
| ----------------------------------- | --------------------------------------------- | ---- |
| /api/movies/:movieId/reviews | Get all reviews for specific movie | GET |
| /api/movies/:movieId/screenings | Get all screenings for specific movie | GET |
| /api/movies/:movieId/reviews?page=X | Get  only 5 reviews from a specific movieId | GET |
| /api/movies/:movieId/reviews?rating | Get the movie average rating | GET |
| ----------------------------------- | --------------------------------------------- | ---- |
| /api/movies/:movieId/reviews | Post review for specific movie| POST |

### SCREENINGS

| **Screeings** Api route | Description | verb |
| -------------------------------------------------------- | ----------------------- | ---- |
| -------------------------------------------------------- | ----------------------- | ---- |
| /api/screenings?populate=movie&pagination[pageSize]=1000 | Get upcoming screenings | GET |


## Rest API assignment retrospective:

Vi har haft bra löpande kommunikation, framförallt genom Discord.
Det har dock varit svårt ibland att få till mötestider som passar alla.

Vi hade lite svårt att komma igång då gruppen hade svårt att förstå varandra när vi pratade om kommunikationen mellan strapi, node och webbläsare.
När vi väl var på samma sida gällande det, så var det lätt att dela upp uppgifterna.

Det största problemet för nästan alla i gruppen har varit testandet. Mest för att det var nytt för oss.

Vi har gott samarbete i gruppen, och hjälper glatt varandra när frågor ställs.


### resources
[Figma Link](https://www.figma.com/file/hwAMfoHaiLQgxCkEvLuuoA/KinoRestUppgift?node-id=0%3A1)
[Trello Linkn](https://trello.com/b/63vmxs4r/kanban-kino)

