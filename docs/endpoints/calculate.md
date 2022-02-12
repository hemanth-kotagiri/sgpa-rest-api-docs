# Calcualte-Endpoint

Note that this endpoint only returns the results of Regular exams of R18 students.

| Parameter    | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `Hallticket` | `string` | **Required**: Your Hallticket Number               |
| `dob`        | `string` | **Required**: Your Date of Birth (YYYY-MM-DD)      |
| `Year`       | `string` | **Required**: Desired Year and Semester (year,sem) |

Endpoint to calculate the sgpa.

```http
  GET /calculate/hallticket/dob/year
```

### Usage

1. Go here:

```
https://results-restapi.herokuapp.com
```

2. As the above parameters have been mentioned, form the endpoint as such:

```
https://results-restapi.herokuapp.com/calculate/hallticket-number/date-of-birth/year
```

3. Substitute your identification values properly in the above parameters and
   the RestAPI is triggered.

### Example

Copy and paste this url in a new tab:

```
  https://results-restapi.herokuapp.com/calculate/185U1A0565/2001-04-03/1,1
```

You would obtain a response as such:

```json
[
  {
    "SGPA": "Value"
  },
  {
    "HTNO": "Hallticket Number",
    "NAME": "Student Name",
    "FATHER NAME": "Student's Father Name",
    "COLLEGE CODE": "Code"
  },
  [
    {
      "subject_code": "15105",
      "subject_name": "ENGINEERING WORKSHOP",
      "grade_earned": "A+",
      "subject_credits": "2.5"
    },
    {
      "subject_code": "15106",
      "subject_name": "ENGINEERING CHEMISTRY LAB",
      "grade_earned": "A+",
      "subject_credits": "1.5"
    },
    {
      "subject_code": "15107",
      "subject_name": "ENGLISH LANGUAGE AND COMMUNICATION SKILLS LAB",
      "grade_earned": "O",
      "subject_credits": "1"
    },
    {
      "subject_code": "15108",
      "subject_name": "BASIC ELECTRICAL ENGINEERING LAB",
      "grade_earned": "O",
      "subject_credits": "1"
    },
    {
      "subject_code": "151AA",
      "subject_name": "MATHEMATICS  I",
      "grade_earned": "B+",
      "subject_credits": "4"
    },
    {
      "subject_code": "151AF",
      "subject_name": "CHEMISTRY",
      "grade_earned": "C",
      "subject_credits": "4"
    },
    {
      "subject_code": "151AG",
      "subject_name": "BASIC ELECTRICAL ENGINEERING",
      "grade_earned": "A",
      "subject_credits": "3"
    },
    {
      "subject_code": "151AH",
      "subject_name": "ENGLISH",
      "grade_earned": "A",
      "subject_credits": "2"
    }
  ]
]
```
