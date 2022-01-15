# New-All-Supply-Endpoint

Endpoint to Fetch all supply results links.

`GET /new/all/supply`

### Usage

1. Go here:

```
https://results-restapi.herokuapp.com/new/all/supply
```

### Example

Copy and paste this url in a new tab:

```
https://results-restapi.herokuapp.com/new/all/supply
```

You would obtain a sample response as such:

```json
[
  {
    "exam_name": " RC/RV B.Tech II Year I Semester (R18) Supplementary Examinations Results",
    "release_date": "07-JAN-2022",
    "links": [
      "http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&examCode=1496&etype=r17&result=gradercrv&type=rcrvintgrade",
      "http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&examCode=1496&etype=r17&result=gradercrv&type=rcrvintgrade"
    ],
    "degree": "btech",
    "examCode": "1496",
    "etype": "r17",
    "result": "gradercrv",
    "type": "rcrvintgrade",
    "id": 0
  },
  {
    "exam_name": " RC/RV B.Tech II Year I Semester (R16) Supplementary Examinations Results",
    "release_date": "07-JAN-2022",
    "links": [
      "http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&examCode=1497&etype=r17&result=gradercrv&type=rcrvintgrade",
      "http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&examCode=1497&etype=r17&result=gradercrv&type=rcrvintgrade"
    ],
    "degree": "btech",
    "examCode": "1497",
    "etype": "r17",
    "result": "gradercrv",
    "type": "rcrvintgrade",
    "id": 1
  },
  {
    "exam_name": " RC/RV B.Tech II Year I Semester (R15) Supplementary Examinations Results",
    "release_date": "07-JAN-2022",
    "links": [
      "http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&examCode=1498&etype=rcrv",
      "http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&examCode=1498&etype=rcrv"
    ],
    "degree": "btech",
    "examCode": "1498",
    "etype": "rcrv",
    "id": 2
  }
]
...
```
