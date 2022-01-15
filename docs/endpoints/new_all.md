# New-All-Endpoint

Endpoint to Fetch all results links (Supplementary and Regular).

`GET /calculate/hallticket/dob/year`

### Usage

1. Go here:

```
https://results-restapi.herokuapp.com/new/all
```

### Example

Copy and paste this url in a new tab:

```
https://results-restapi.herokuapp.com/new/all
```

You would obtain a sample response as such:

```json
{
  "total-exam-result-releases": 334,
  "total-regular-exam-result-releases": 49,
  "total-supply-exam-result-releases": 286,
  "regular": [
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
    }
  ]...
}
```
