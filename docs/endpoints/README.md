## Endpoints

**Note that the response is in the form of JSON only.**

### Endpoints

```
- /          - This is the home page.
- /result    - A query parameter specific endpoint.
- /calculate - Fetch the SGPA along with other details.
```

### API Reference

#### Get results and student details

```http
  GET /hallticket/dob/year
```

#### Query parameter specific endpoint.

```http
  GET /result?hallticket&dob&year
```

#### Endpoint to calculate the sgpa.

```http
  GET /calculate/hallticket/dob/year
```

| Parameter    | Type     | Description                                        |
| :----------- | :------- | :------------------------------------------------- |
| `Hallticket` | `string` | **Required**: Your Hallticket Number               |
| `dob`        | `string` | **Required**: Your Date of Birth (YYYY-MM-DD)      |
| `Year`       | `string` | **Required**: Desired Year and Semester (year,sem) |

Please navigate through the sidebar for each individual endpoint description
and usage
