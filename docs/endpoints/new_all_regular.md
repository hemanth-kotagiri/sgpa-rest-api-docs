# New-All-Regular-Endpoint

Endpoint to Fetch all regular results links.

`GET /new/all/regular`

### Usage

1. Go here:

```
https://results-restapi.herokuapp.com/new/all/regular
```

### Example

Copy and paste this url in a new tab:

```
https://results-restapi.herokuapp.com/new/all/regular
```

You would obtain a sample response as such:

```json
[
  {
    "exam_name": "B.Tech I Year II Semester (R18) Regular Examinations Results",
    "release_date": "16-DEC-2021",
    "links": [
      "http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&examCode=1503&etype=r17&type=intgrade",
      "http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&examCode=1503&etype=r17&type=intgrade"
    ],
    "degree": "btech",
    "examCode": "1503",
    "etype": "r17",
    "type": "intgrade",
    "id": 0
  },
  {
    "exam_name": "B.Tech III Year II Semester (R18) Regular Examinations Results",
    "release_date": "09-DEC-2021",
    "links": [
      "http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&examCode=1502&etype=r17&type=intgrade",
      "http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&examCode=1502&etype=r17&type=intgrade"
    ],
    "degree": "btech",
    "examCode": "1502",
    "etype": "r17",
    "type": "intgrade",
    "id": 1
  },
  {
    "exam_name": "B.Tech II Year II Semester (R18) Regular Examinations Results",
    "release_date": "18-NOV-2021",
    "links": [
      "http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&examCode=1501&etype=r17&type=intgrade",
      "http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&examCode=1501&etype=r17&type=intgrade"
    ],
    "degree": "btech",
    "examCode": "1501",
    "etype": "r17",
    "type": "intgrade",
    "id": 2
  },
  {
    "exam_name": "RC/RV B.Tech I Year I Semester (R18) Regular Examinations Results",
    "release_date": "26-SEP-2021",
    "links": [
      "http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&examCode=1467&etype=r17&result=gradercrv&type=rcrvintgrade",
      "http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&examCode=1467&etype=r17&result=gradercrv&type=rcrvintgrade"
    ],
    "degree": "btech",
    "examCode": "1467",
    "etype": "r17",
    "result": "gradercrv",
    "type": "rcrvintgrade",
    "id": 3
  }
]...
```
