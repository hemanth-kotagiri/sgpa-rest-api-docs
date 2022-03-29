# API-Bulk Endpoint

| Parameter         | Type     | Description                                   |
| :---------------- | :------- | :-------------------------------------------- |
| `hallticket_from` | `string` | **Required**: Beginning hallticket number     |
| `hallticket_to`   | `string` | **Required**: Ending hallticket number        |
| `dob`             | `string` | **Required**: Your Date of Birth (YYYY-MM-DD) |
| `degree`          | `string` | **Required**: usually : `btech`               |
| `examCode`        | `string` | **Required**: unique exam code                |
| `eType`           | `string` | **Required**: unique eType                    |
| `type`            | `string` | **Optional**: unique type ( eg: intgrade )    |
| `result`          | `string` | **Required**: parameter for old results links |

An extremely fast (~2.6 seconds on average for getting results of 198
halltickets) endpoint to fetch huge list of results.

It is a query parameter endpoint to get results **asynchronously** of a set of halltickets given the
starting and ending numbers of the desired range along with other exam parameters.

```http
  GET /api?hallticket_from&hallticket_to&dob&degree&examCode&eType&type&result
```
::: warning NOTE
If you specify a range of 60 values, that is 60 students - the backend shoots 60
**_asynchronous_** requests to JNTUH servers. Although similar requests are cached
using Redis, it is highly adviced use this feature properly, so that there wouldn't
be a [DDoS](https://en.wikipedia.org/wiki/Denial-of-service_attack#Distributed_attack).
:::


### Usage

1. Go here:

```
https://results-restapi.herokuapp.com
```

2. As the above parameters have been mentioned, form the endpoint as such:

   ```
    https://results-restapi.herokuapp.com/api?hallticket_from&hallticket_to&dob&degree&examCode&eType&type&result
   ```

3. Substitute your identification values in the above parameters and the
   RestAPI is triggered.

### Example

You could use Postman or any other service as you wish to test the RestAPI.

Copy and paste this url in a new tab:

```
https://results-restapi.herokuapp.com/api/bulk/calculate?hallticket_from=185U1A0560&hallticket_to=185U1A0580&dob=3&examCode=1502&result=&type=intgrade&etype=r17&degree=btech
```

and it shall trigger the endpoint with the below response. Now, all you need to
do is change the hallticket-number and the date-of-brith to trigger the
endpoint to fetch the specific results.

When you request this endpoint, a worker thread is fired to fetch the results
asynchronously. While that happens, the result is expected to be in two states.
Such as:

1. Result is loading

```json
{
  "result": "loading"
}
```
- Please keep refreshing the page until you see the below response. I had to do
this because the list of halltickets to get the result for is typically huge
and, Heroku has 30 second timeout for a pirticular request.

2. Resuts are fetched

```json
[
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
  ],
  [
    {
      "SGPA": ...
    },
    {
      "HTNO": "185U1A0566",...
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
      },...
    ]
  ],
]
```
