define({ "api": [
  {
    "type": "delete",
    "url": "/indicators/:id",
    "title": "Delete Existing Indicators",
    "version": "1.0.0",
    "name": "DeleteIndicator",
    "group": "Indicator",
    "description": "<p>Delete existing indicator</p>",
    "filename": "lib/indicator.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/indicators/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique indicator identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "base",
            "description": "<p>Top(generic or main) indicator under which specific indicator(s) is derived.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Human readable subject of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>Human readable topic of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an indicator if available i.e additional details that clarify about an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when indicator was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when indicator was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c067903d6ef66608f81823c\",\n  \"subject\": \"Water\",\n  \"topic\": \"Water Supply\",\n  \"color\": \"#BCDEFF\",\n  \"updatedAt\": \"2018-12-04T12:54:27.691Z\",\n  \"createdAt\": \"2018-12-04T12:54:27.690Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/indicators/:id",
    "title": "Get Existing Indicators",
    "version": "1.0.0",
    "name": "GetIndicator",
    "group": "Indicator",
    "description": "<p>Get existing indicator</p>",
    "filename": "lib/indicator.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/indicators/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique indicator identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "base",
            "description": "<p>Top(generic or main) indicator under which specific indicator(s) is derived.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Human readable subject of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>Human readable topic of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an indicator if available i.e additional details that clarify about an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when indicator was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when indicator was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c067903d6ef66608f81823c\",\n  \"subject\": \"Water\",\n  \"topic\": \"Water Supply\",\n  \"color\": \"#BCDEFF\",\n  \"updatedAt\": \"2018-12-04T12:54:27.691Z\",\n  \"createdAt\": \"2018-12-04T12:54:27.690Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/indicators/schema",
    "title": "Get Indicators Schema",
    "version": "1.0.0",
    "name": "GetIndicatorSchema",
    "group": "Indicator",
    "description": "<p>Returns indicator json schema definition</p>",
    "filename": "lib/indicator.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/indicators/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/indicators",
    "title": "List Indicators",
    "version": "1.0.0",
    "name": "GetIndicators",
    "group": "Indicator",
    "description": "<p>Returns a list of indicators</p>",
    "filename": "lib/indicator.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/indicators"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of indicators</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique indicator identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.base",
            "description": "<p>Top(generic or main) indicator under which specific indicator(s) is derived.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.subject",
            "description": "<p>Human readable subject of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.topic",
            "description": "<p>Human readable topic of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.description",
            "description": "<p>A brief summary(definition) about an indicator if available i.e additional details that clarify about an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when indicator was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when indicator was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of indicator</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of indicator returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest indicator was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n     {\n       \"_id\": \"5c067903d6ef66608f81823c\",\n       \"subject\": \"Water\",\n       \"topic\": \"Water Supply\",\n       \"color\": \"#BCDEFF\",\n       \"updatedAt\": \"2018-12-04T12:54:27.691Z\",\n       \"createdAt\": \"2018-12-04T12:54:27.690Z\"\n     }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/indicators/:id",
    "title": "Patch Existing Indicators",
    "version": "1.0.0",
    "name": "PatchIndicator",
    "group": "Indicator",
    "description": "<p>Patch existing indicator</p>",
    "filename": "lib/indicator.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/indicators/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique indicator identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "base",
            "description": "<p>Top(generic or main) indicator under which specific indicator(s) is derived.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Human readable subject of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>Human readable topic of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an indicator if available i.e additional details that clarify about an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when indicator was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when indicator was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c067903d6ef66608f81823c\",\n  \"subject\": \"Water\",\n  \"topic\": \"Water Supply\",\n  \"color\": \"#BCDEFF\",\n  \"updatedAt\": \"2018-12-04T12:54:27.691Z\",\n  \"createdAt\": \"2018-12-04T12:54:27.690Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/indicators",
    "title": "Create New Indicators",
    "version": "1.0.0",
    "name": "PostIndicator",
    "group": "Indicator",
    "description": "<p>Create new indicator</p>",
    "filename": "lib/indicator.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/indicators"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique indicator identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "base",
            "description": "<p>Top(generic or main) indicator under which specific indicator(s) is derived.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Human readable subject of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>Human readable topic of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an indicator if available i.e additional details that clarify about an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when indicator was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when indicator was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c067903d6ef66608f81823c\",\n  \"subject\": \"Water\",\n  \"topic\": \"Water Supply\",\n  \"color\": \"#BCDEFF\",\n  \"updatedAt\": \"2018-12-04T12:54:27.691Z\",\n  \"createdAt\": \"2018-12-04T12:54:27.690Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/indicators/:id",
    "title": "Put Existing Indicators",
    "version": "1.0.0",
    "name": "PutIndicator",
    "group": "Indicator",
    "description": "<p>Put existing indicator</p>",
    "filename": "lib/indicator.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/indicators/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique indicator identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "base",
            "description": "<p>Top(generic or main) indicator under which specific indicator(s) is derived.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Human readable subject of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>Human readable topic of an indicator(s).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>A brief summary(definition) about an indicator if available i.e additional details that clarify about an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>A color code(in hexadecimal format) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>An icon(in url, base64, svg formats) used to differentiate indicators visually.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when indicator was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when indicator was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c067903d6ef66608f81823c\",\n  \"subject\": \"Water\",\n  \"topic\": \"Water Supply\",\n  \"color\": \"#BCDEFF\",\n  \"updatedAt\": \"2018-12-04T12:54:27.691Z\",\n  \"createdAt\": \"2018-12-04T12:54:27.690Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/questions/:id",
    "title": "Delete Existing Questions",
    "version": "1.0.0",
    "name": "DeleteQuestion",
    "group": "Question",
    "description": "<p>Delete existing question</p>",
    "filename": "lib/question.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique question identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Indicator",
            "optional": false,
            "field": "indicator",
            "description": "<p>Indicator which a question assess.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a question is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a question is used to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a question is applicable to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique variable name of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "help",
            "description": "<p>A brief additional details that clarify about a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "choices",
            "description": "<p>A set of allowed choices(or selection options) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.label",
            "description": "<p>Human readable option(or answer choice) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.name",
            "description": "<p>Unique value(or variable) of a question option(or answer choice).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when question was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when question was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c0777154797997c9dae8d7c\",\n   \"indicator\":\n   {\n       \"_id\": \"5c0777154797997c9dae8d72\"\n       \"subject\": \"Water\",\n       \"topic\": \"Water Supply\",\n   },\n   \"assess\": \"Need\",\n   \"stage\": \"During\",\n   \"phase\": \"Preparedness\",\n   \"type\": \"text\",\n   \"name\": \"water_supply_before\",\n   \"label\": \"Was there water supply before the disaster?\",\n   \"choices\": [\n   {\n       \"label\": \"Yes\",\n       \"name\": \"yes\"\n   },\n   {\n       \"label\": \"No\",\n       \"name\": \"no\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/questions/:id",
    "title": "Get Existing Questions",
    "version": "1.0.0",
    "name": "GetQuestion",
    "group": "Question",
    "description": "<p>Get existing question</p>",
    "filename": "lib/question.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique question identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Indicator",
            "optional": false,
            "field": "indicator",
            "description": "<p>Indicator which a question assess.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a question is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a question is used to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a question is applicable to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique variable name of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "help",
            "description": "<p>A brief additional details that clarify about a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "choices",
            "description": "<p>A set of allowed choices(or selection options) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.label",
            "description": "<p>Human readable option(or answer choice) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.name",
            "description": "<p>Unique value(or variable) of a question option(or answer choice).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when question was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when question was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c0777154797997c9dae8d7c\",\n   \"indicator\":\n   {\n       \"_id\": \"5c0777154797997c9dae8d72\"\n       \"subject\": \"Water\",\n       \"topic\": \"Water Supply\",\n   },\n   \"assess\": \"Need\",\n   \"stage\": \"During\",\n   \"phase\": \"Preparedness\",\n   \"type\": \"text\",\n   \"name\": \"water_supply_before\",\n   \"label\": \"Was there water supply before the disaster?\",\n   \"choices\": [\n   {\n       \"label\": \"Yes\",\n       \"name\": \"yes\"\n   },\n   {\n       \"label\": \"No\",\n       \"name\": \"no\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/questions/schema",
    "title": "Get Questions Schema",
    "version": "1.0.0",
    "name": "GetQuestionSchema",
    "group": "Question",
    "description": "<p>Returns question json schema definition</p>",
    "filename": "lib/question.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questions/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/questions",
    "title": "List Questions",
    "version": "1.0.0",
    "name": "GetQuestions",
    "group": "Question",
    "description": "<p>Returns a list of questions</p>",
    "filename": "lib/question.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questions"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of questions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique question identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Indicator",
            "optional": false,
            "field": "data.indicator",
            "description": "<p>Indicator which a question assess.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.assess",
            "description": "<p>Human readable type of assessment a question is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.stage",
            "description": "<p>Human readable stage underwhich a question is used to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phase",
            "description": "<p>Disaster management phase under which a question is applicable to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>Human readable type of entry of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>Unique variable name of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.label",
            "description": "<p>Human readable label of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.help",
            "description": "<p>A brief additional details that clarify about a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "data.choices",
            "description": "<p>A set of allowed choices(or selection options) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.choices.label",
            "description": "<p>Human readable option(or answer choice) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.choices.name",
            "description": "<p>Unique value(or variable) of a question option(or answer choice).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.createdAt",
            "description": "<p>Date when question was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "data.updatedAt",
            "description": "<p>Date when question was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of question</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of question returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest question was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n    {\n     \"_id\": \"5c0777154797997c9dae8d7c\",\n     \"indicator\":\n     {\n        \"_id\": \"5c0777154797997c9dae8d72\"\n        \"subject\": \"Water\",\n        \"topic\": \"Water Supply\",\n     },\n     \"assess\": \"Need\",\n     \"stage\": \"During\",\n     \"phase\": \"Preparedness\",\n     \"type\": \"text\",\n     \"name\": \"water_supply_before\",\n     \"label\": \"Was there water supply before the disaster?\",\n     \"choices\": [\n     {\n        \"label\": \"Yes\",\n        \"name\": \"yes\"\n     },\n     {\n        \"label\": \"No\",\n        \"name\": \"no\"\n     }]\n    }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/questions/:id",
    "title": "Patch Existing Questions",
    "version": "1.0.0",
    "name": "PatchQuestion",
    "group": "Question",
    "description": "<p>Patch existing question</p>",
    "filename": "lib/question.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique question identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Indicator",
            "optional": false,
            "field": "indicator",
            "description": "<p>Indicator which a question assess.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a question is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a question is used to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a question is applicable to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique variable name of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "help",
            "description": "<p>A brief additional details that clarify about a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "choices",
            "description": "<p>A set of allowed choices(or selection options) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.label",
            "description": "<p>Human readable option(or answer choice) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.name",
            "description": "<p>Unique value(or variable) of a question option(or answer choice).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when question was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when question was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c0777154797997c9dae8d7c\",\n   \"indicator\":\n   {\n       \"_id\": \"5c0777154797997c9dae8d72\"\n       \"subject\": \"Water\",\n       \"topic\": \"Water Supply\",\n   },\n   \"assess\": \"Need\",\n   \"stage\": \"During\",\n   \"phase\": \"Preparedness\",\n   \"type\": \"text\",\n   \"name\": \"water_supply_before\",\n   \"label\": \"Was there water supply before the disaster?\",\n   \"choices\": [\n   {\n       \"label\": \"Yes\",\n       \"name\": \"yes\"\n   },\n   {\n       \"label\": \"No\",\n       \"name\": \"no\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/questions",
    "title": "Create New Questions",
    "version": "1.0.0",
    "name": "PostQuestion",
    "group": "Question",
    "description": "<p>Create new question</p>",
    "filename": "lib/question.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questions"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique question identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Indicator",
            "optional": false,
            "field": "indicator",
            "description": "<p>Indicator which a question assess.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a question is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a question is used to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a question is applicable to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique variable name of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "help",
            "description": "<p>A brief additional details that clarify about a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "choices",
            "description": "<p>A set of allowed choices(or selection options) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.label",
            "description": "<p>Human readable option(or answer choice) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.name",
            "description": "<p>Unique value(or variable) of a question option(or answer choice).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when question was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when question was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c0777154797997c9dae8d7c\",\n   \"indicator\":\n   {\n       \"_id\": \"5c0777154797997c9dae8d72\"\n       \"subject\": \"Water\",\n       \"topic\": \"Water Supply\",\n   },\n   \"assess\": \"Need\",\n   \"stage\": \"During\",\n   \"phase\": \"Preparedness\",\n   \"type\": \"text\",\n   \"name\": \"water_supply_before\",\n   \"label\": \"Was there water supply before the disaster?\",\n   \"choices\": [\n   {\n       \"label\": \"Yes\",\n       \"name\": \"yes\"\n   },\n   {\n       \"label\": \"No\",\n       \"name\": \"no\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/questions/:id",
    "title": "Put Existing Questions",
    "version": "1.0.0",
    "name": "PutQuestion",
    "group": "Question",
    "description": "<p>Put existing question</p>",
    "filename": "lib/question.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questions/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique question identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "Indicator",
            "optional": false,
            "field": "indicator",
            "description": "<p>Indicator which a question assess.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a question is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a question is used to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a question is applicable to assess an indicator.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Unique variable name of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "help",
            "description": "<p>A brief additional details that clarify about a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "choices",
            "description": "<p>A set of allowed choices(or selection options) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.label",
            "description": "<p>Human readable option(or answer choice) of a question.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "choices.name",
            "description": "<p>Unique value(or variable) of a question option(or answer choice).</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when question was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when question was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"_id\": \"5c0777154797997c9dae8d7c\",\n   \"indicator\":\n   {\n       \"_id\": \"5c0777154797997c9dae8d72\"\n       \"subject\": \"Water\",\n       \"topic\": \"Water Supply\",\n   },\n   \"assess\": \"Need\",\n   \"stage\": \"During\",\n   \"phase\": \"Preparedness\",\n   \"type\": \"text\",\n   \"name\": \"water_supply_before\",\n   \"label\": \"Was there water supply before the disaster?\",\n   \"choices\": [\n   {\n       \"label\": \"Yes\",\n       \"name\": \"yes\"\n   },\n   {\n       \"label\": \"No\",\n       \"name\": \"no\"\n   }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/questionnaires/:id",
    "title": "Delete Existing Questionnaires",
    "version": "1.0.0",
    "name": "DeleteQuestionnaire",
    "group": "Questionnaire",
    "description": "<p>Delete existing questionnaire</p>",
    "filename": "lib/questionnaire.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questionnaires/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique questionnaire identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a questionnaire is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a questionnaire is used for assessment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a questionnaire is used for assessment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>Human readable title of the questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "descriptions",
            "description": "<p>A brief summary(definition) about a questionnaire to provide additional details that clarify about a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Question[]",
            "optional": false,
            "field": "questions",
            "description": "<p>A set of questions belongs to a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when questionnaire was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when questionnaire was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c07af709404b82c5efdb438\",\n  \"assess\": \"Need\",\n  \"stage\": \"During\",\n  \"phase\": \"Response\",\n  \"title\": \"Need Assessment\",\n  \"questions\": [\n     {\n       \"_id\": \"5c0777154797997c9dae8d7c\",\n       \"indicator\":\n       {\n         \"_id\": \"5c0777154797997c9dae8d72\"\n         \"subject\": \"Water\",\n         \"topic\": \"Water Supply\",\n       },\n       \"assess\": \"Need\",\n       \"stage\": \"During\",\n       \"phase\": \"Preparedness\",\n       \"type\": \"text\",\n       \"name\": \"water_supply_before\",\n       \"label\": \"Was there water supply before the disaster?\",\n       \"choices\": [\n        {\n           \"label\": \"Yes\",\n           \"name\": \"yes\"\n         },\n         {\n           \"label\": \"No\",\n           \"name\": \"no\"\n         }\n       ]\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/questionnaires/:id",
    "title": "Get Existing Questionnaires",
    "version": "1.0.0",
    "name": "GetQuestionnaire",
    "group": "Questionnaire",
    "description": "<p>Get existing questionnaire</p>",
    "filename": "lib/questionnaire.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questionnaires/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique questionnaire identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a questionnaire is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a questionnaire is used for assessment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a questionnaire is used for assessment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>Human readable title of the questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "descriptions",
            "description": "<p>A brief summary(definition) about a questionnaire to provide additional details that clarify about a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Question[]",
            "optional": false,
            "field": "questions",
            "description": "<p>A set of questions belongs to a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when questionnaire was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when questionnaire was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c07af709404b82c5efdb438\",\n  \"assess\": \"Need\",\n  \"stage\": \"During\",\n  \"phase\": \"Response\",\n  \"title\": \"Need Assessment\",\n  \"questions\": [\n     {\n       \"_id\": \"5c0777154797997c9dae8d7c\",\n       \"indicator\":\n       {\n         \"_id\": \"5c0777154797997c9dae8d72\"\n         \"subject\": \"Water\",\n         \"topic\": \"Water Supply\",\n       },\n       \"assess\": \"Need\",\n       \"stage\": \"During\",\n       \"phase\": \"Preparedness\",\n       \"type\": \"text\",\n       \"name\": \"water_supply_before\",\n       \"label\": \"Was there water supply before the disaster?\",\n       \"choices\": [\n        {\n           \"label\": \"Yes\",\n           \"name\": \"yes\"\n         },\n         {\n           \"label\": \"No\",\n           \"name\": \"no\"\n         }\n       ]\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/questionnaires/schema",
    "title": "Get Questionnaires Schema",
    "version": "1.0.0",
    "name": "GetQuestionnaireSchema",
    "group": "Questionnaire",
    "description": "<p>Returns questionnaire json schema definition</p>",
    "filename": "lib/questionnaire.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questionnaires/schema"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/questionnaires",
    "title": "List Questionnaires",
    "version": "1.0.0",
    "name": "GetQuestionnaires",
    "group": "Questionnaire",
    "description": "<p>Returns a list of questionnaires</p>",
    "filename": "lib/questionnaire.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questionnaires"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>List of questionnaires</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data._id",
            "description": "<p>Unique questionnaire identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.assess",
            "description": "<p>Human readable type of assessment a questionnaire is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.stage",
            "description": "<p>Human readable stage underwhich a questionnaire is used for assessment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.phase",
            "description": "<p>Disaster management phase under which a questionnaire is used for assessment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.type",
            "description": "<p>Human readable type of entry of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.titel",
            "description": "<p>Human readable title of the questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.label",
            "description": "<p>Human readable label of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "data.descriptions",
            "description": "<p>A brief summary(definition) about a questionnaire to provide additional details that clarify about a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Question[]",
            "optional": false,
            "field": "data.questions",
            "description": "<p>A set of questions belongs to a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when questionnaire was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when questionnaire was last updated.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of questionnaire returned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Query limit used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Query skip/offset used</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "pages",
            "description": "<p>Total number of pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Date and time at which latest questionnaire was last modified</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n   \"data\": [\n   {\n     \"_id\": \"5c07af709404b82c5efdb438\",\n     \"assess\": \"Need\",\n     \"stage\": \"During\",\n     \"phase\": \"Response\",\n     \"title\": \"Need Assessment\",\n     \"questions\": [\n       {\n         \"_id\": \"5c0777154797997c9dae8d7c\",\n         \"indicator\":\n         {\n           \"_id\": \"5c0777154797997c9dae8d72\"\n           \"subject\": \"Water\",\n           \"topic\": \"Water Supply\",\n         },\n         \"assess\": \"Need\",\n         \"stage\": \"During\",\n         \"phase\": \"Preparedness\",\n         \"type\": \"text\",\n         \"name\": \"water_supply_before\",\n         \"label\": \"Was there water supply before the disaster?\",\n         \"choices\": [\n         {\n           \"label\": \"Yes\",\n           \"name\": \"yes\"\n         },\n         {\n           \"label\": \"No\",\n           \"name\": \"no\"\n         }]\n       }]\n    }\n   ],\n  \"total\": 10,\n  \"size\": 2,\n  \"limit\": 2,\n  \"skip\": 0,\n  \"page\": 1,\n  \"pages\": 5,\n  \"lastModified\": \"2018-05-06T10:19:04.910Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/questionnaires/:id",
    "title": "Patch Existing Questionnaires",
    "version": "1.0.0",
    "name": "PatchQuestionnaire",
    "group": "Questionnaire",
    "description": "<p>Patch existing questionnaire</p>",
    "filename": "lib/questionnaire.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questionnaires/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique questionnaire identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a questionnaire is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a questionnaire is used for assessment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a questionnaire is used for assessment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>Human readable title of the questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "descriptions",
            "description": "<p>A brief summary(definition) about a questionnaire to provide additional details that clarify about a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Question[]",
            "optional": false,
            "field": "questions",
            "description": "<p>A set of questions belongs to a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when questionnaire was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when questionnaire was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c07af709404b82c5efdb438\",\n  \"assess\": \"Need\",\n  \"stage\": \"During\",\n  \"phase\": \"Response\",\n  \"title\": \"Need Assessment\",\n  \"questions\": [\n     {\n       \"_id\": \"5c0777154797997c9dae8d7c\",\n       \"indicator\":\n       {\n         \"_id\": \"5c0777154797997c9dae8d72\"\n         \"subject\": \"Water\",\n         \"topic\": \"Water Supply\",\n       },\n       \"assess\": \"Need\",\n       \"stage\": \"During\",\n       \"phase\": \"Preparedness\",\n       \"type\": \"text\",\n       \"name\": \"water_supply_before\",\n       \"label\": \"Was there water supply before the disaster?\",\n       \"choices\": [\n        {\n           \"label\": \"Yes\",\n           \"name\": \"yes\"\n         },\n         {\n           \"label\": \"No\",\n           \"name\": \"no\"\n         }\n       ]\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/questionnaires",
    "title": "Create New Questionnaires",
    "version": "1.0.0",
    "name": "PostQuestionnaire",
    "group": "Questionnaire",
    "description": "<p>Create new questionnaire</p>",
    "filename": "lib/questionnaire.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questionnaires"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique questionnaire identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a questionnaire is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a questionnaire is used for assessment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a questionnaire is used for assessment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>Human readable title of the questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "descriptions",
            "description": "<p>A brief summary(definition) about a questionnaire to provide additional details that clarify about a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Question[]",
            "optional": false,
            "field": "questions",
            "description": "<p>A set of questions belongs to a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when questionnaire was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when questionnaire was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c07af709404b82c5efdb438\",\n  \"assess\": \"Need\",\n  \"stage\": \"During\",\n  \"phase\": \"Response\",\n  \"title\": \"Need Assessment\",\n  \"questions\": [\n     {\n       \"_id\": \"5c0777154797997c9dae8d7c\",\n       \"indicator\":\n       {\n         \"_id\": \"5c0777154797997c9dae8d72\"\n         \"subject\": \"Water\",\n         \"topic\": \"Water Supply\",\n       },\n       \"assess\": \"Need\",\n       \"stage\": \"During\",\n       \"phase\": \"Preparedness\",\n       \"type\": \"text\",\n       \"name\": \"water_supply_before\",\n       \"label\": \"Was there water supply before the disaster?\",\n       \"choices\": [\n        {\n           \"label\": \"Yes\",\n           \"name\": \"yes\"\n         },\n         {\n           \"label\": \"No\",\n           \"name\": \"no\"\n         }\n       ]\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/questionnaires/:id",
    "title": "Put Existing Questionnaires",
    "version": "1.0.0",
    "name": "PutQuestionnaire",
    "group": "Questionnaire",
    "description": "<p>Put existing questionnaire</p>",
    "filename": "lib/questionnaire.http.router.js",
    "groupTitle": "",
    "sampleRequest": [
      {
        "url": "https://emis-questionnaire.herokuapp.com/v1/questionnaires/:id"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept",
            "defaultValue": "application/json",
            "description": "<p>Accepted content type</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": true,
            "field": "Accept-Encoding",
            "defaultValue": "gzip, deflate",
            "description": "<p>Accepted encoding type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Accept\": \"application/json\"\n  \"Authorization\": \"Bearer ey6utFreRdy5\"\n  \"Accept-Encoding\": \"gzip, deflate\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique questionnaire identifier</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "assess",
            "description": "<p>Human readable type of assessment a questionnaire is used for.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>Human readable stage underwhich a questionnaire is used for assessment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phase",
            "description": "<p>Disaster management phase under which a questionnaire is used for assessment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Human readable type of entry of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "titel",
            "description": "<p>Human readable title of the questionnaire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "label",
            "description": "<p>Human readable label of a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "descriptions",
            "description": "<p>A brief summary(definition) about a questionnaire to provide additional details that clarify about a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Question[]",
            "optional": false,
            "field": "questions",
            "description": "<p>A set of questions belongs to a questionnaire.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Date when questionnaire was created.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Date when questionnaire was last updated.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"_id\": \"5c07af709404b82c5efdb438\",\n  \"assess\": \"Need\",\n  \"stage\": \"During\",\n  \"phase\": \"Response\",\n  \"title\": \"Need Assessment\",\n  \"questions\": [\n     {\n       \"_id\": \"5c0777154797997c9dae8d7c\",\n       \"indicator\":\n       {\n         \"_id\": \"5c0777154797997c9dae8d72\"\n         \"subject\": \"Water\",\n         \"topic\": \"Water Supply\",\n       },\n       \"assess\": \"Need\",\n       \"stage\": \"During\",\n       \"phase\": \"Preparedness\",\n       \"type\": \"text\",\n       \"name\": \"water_supply_before\",\n       \"label\": \"Was there water supply before the disaster?\",\n       \"choices\": [\n        {\n           \"label\": \"Yes\",\n           \"name\": \"yes\"\n         },\n         {\n           \"label\": \"No\",\n           \"name\": \"no\"\n         }\n       ]\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "JWTExpired",
            "description": "<p>Authorization token has expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AuthorizationHeaderRequired",
            "description": "<p>Authorization header is required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"jwt expired\",\n  \"error\":{}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"success\":false,\n  \"message :\"Authorization header required\",\n  \"error\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
