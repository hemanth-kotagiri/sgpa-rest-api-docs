## Endpoints

**Note that the response is in the form of JSON only.**

### API Reference

| Parameter    | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `Hallticket` | `string` | **Required**: Your Hallticket Number               |
| `dob`        | `string` | **Required**: Your Date of Birth (YYYY-MM-DD)      |
| `Year`       | `string` | **Required**: Desired Year and Semester (year,sem) |

Below are R-18 (2018) - Batch only endpoints

#### Get results and student details

`GET /hallticket/dob/year`

#### Query parameter specific endpoint.

` GET /result?hallticket&dob&year`

#### Endpoint to calculate the sgpa.

`GET /calculate/hallticket/dob/year`

---

#### Fetch all results links (Supplementary and Regular).

`GET /new/all`

#### Fetch all regular results links.

`GET /new/all/regular`

#### Fetch all supplementary links.

`GET /new/all/supply`

#### Returns all results links in unordered fashion

`GET /new/`

#### Returns all the latest released notifications

`GET /notifications`

---

| Parameter    | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `Hallticket` | `string` | **Required**: Your Hallticket Number               |
| `dob`        | `string` | **Required**: Your Date of Birth (YYYY-MM-DD)      |
| `Year`       | `string` | **Required**: Desired Year and Semester (year,sem) |
| `degree`     | `string` | **Required**: usually : `btech`                    |
| `examCode`   | `string` | **Required**: unique exam code                     |
| `eType`      | `string` | **Required**: unique eType                         |
| `type`       | `string` | **Required**: unique type ( eg: intgrade )         |
| `result`     | `string` | **Required**: parameter for old results links      |

#### A Query parameter endpoint to get result of an exam given hallticket, date of birth, degree, examCode, eType, type and result.

`GET /api`

#### A Query parameter endpoint to get result of an exam given hallticket, date of birth, degree, examCode, eType, type and result with sgpa.

`GET /api/calculate`

Please navigate through the sidebar for each individual endpoint description
and usage
