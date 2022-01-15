# API-Calculate-Endpoint

| Parameter    | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `Hallticket` | `string` | **Required**: Your Hallticket Number               |
| `dob`        | `string` | **Required**: Your Date of Birth (YYYY-MM-DD)      |
| `Year`       | `string` | **Required**: Desired Year and Semester (year,sem) |
| `degree`     | `string` | **Required**: usually : `btech`                    |
| `examCode`   | `string` | **Required**: unique exam code                     |
| `eType`      | `string` | **Required**: unique eType                         |
| `type`       | `string` | **Optional**: unique type ( eg: intgrade )         |
| `result`     | `string` | **Required**: parameter for old results links      |

A Query parameter endpoint to get result along with sgpa of an exam given hallticket, date of birth, degree, examCode, eType, type and result.

```http
  GET /api/calculate?hallticket&dob&year&degree&examCode&eType&type&result
```

### Usage

1. Go here:

```
https://results-restapi.herokuapp.com
```

2. As the above parameters have been mentioned, form the endpoint as such:

   ```
    https://results-restapi.herokuapp.com/api/calculate?hallticket&dob&year&degree&examCode&eType&type&result
   ```

3. Substitute your identification values in the above parameters and the
   RestAPI is triggered.

### Example

You could use Postman or any other service as you wish to test the RestAPI.

Copy and paste this url in a new tab:

```
https://results-restapi.herokuapp.com/api/calculate?hallticket=185u1a0565&dob=3&degree=btech&examCode=1502&etype=r17&type=intgrade
```

and it shall trigger the endpoint with the below response. Now, all you need to
do is change the hallticket-number and the date-of-brith to trigger the
endpoint to fetch the specific results.

You would obtain the response object as follows:

```json
[
  {
    "SGPA": 7.91
  },
  {
    "HTNO": "185U1A0565",
    "NAME": "KOTAGIRI HEMANTH",
    "FATHER NAME": "K SRINIVAS",
    "COLLEGE CODE": "5U"
  },
  [
    {
      "subject_code": "15607",
      "subject_name": "COMPILER DESIGN LAB",
      "grade_earned": "O",
      "subject_credits": "1.5",
      "internal_marks": "22",
      "external_marks": "71",
      "total_marks": "93"
    },
    {
      "subject_code": "15618",
      "subject_name": "MACHINE LEARNING LAB",
      "grade_earned": "O",
      "subject_credits": "1.5",
      "internal_marks": "24",
      "external_marks": "74",
      "total_marks": "98"
    },
    {
      "subject_code": "15631",
      "subject_name": "SOFTWARE TESTING METHODOLOGIES LAB",
      "grade_earned": "O",
      "subject_credits": "1",
      "internal_marks": "23",
      "external_marks": "70",
      "total_marks": "93"
    },
    {
      "subject_code": "15634",
      "subject_name": "CYBER SECURITY",
      "grade_earned": "O",
      "subject_credits": "0",
      "internal_marks": "96",
      "external_marks": "0",
      "total_marks": "96"
    },
    {
      "subject_code": "156AH",
      "subject_name": "COMPILER DESIGN",
      "grade_earned": "B",
      "subject_credits": "4",
      "internal_marks": "17",
      "external_marks": "36",
      "total_marks": "53"
    },
    {
      "subject_code": "156AN",
      "subject_name": "DESIGN AND ANALYSIS OF ALGORITHMS",
      "grade_earned": "A+",
      "subject_credits": "4",
      "internal_marks": "22",
      "external_marks": "58",
      "total_marks": "80"
    },
    {
      "subject_code": "156BN",
      "subject_name": "MACHINE LEARNING",
      "grade_earned": "A",
      "subject_credits": "4",
      "internal_marks": "22",
      "external_marks": "48",
      "total_marks": "70"
    },
    {
      "subject_code": "156CW",
      "subject_name": "SOFTWARE TESTING METHODOLOGIES",
      "grade_earned": "B+",
      "subject_credits": "3",
      "internal_marks": "22",
      "external_marks": "46",
      "total_marks": "68"
    },
    {
      "subject_code": "156DP",
      "subject_name": "DISASTER PREPAREDNESS & PLANNING MANAGEMENT",
      "grade_earned": "B+",
      "subject_credits": "3",
      "internal_marks": "18",
      "external_marks": "44",
      "total_marks": "62"
    }
  ]
]
```
