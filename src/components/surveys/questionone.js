export const json = {
    "title": "MiTalent360",
    "logoPosition": "right",
    "completedHtml": "<h3>Thank you for your feedback</h3> <h5>Your thoughts and ideas will help us improve our product.</h5>",
    "completedHtmlOnCondition": [
     {
      "html": "<h3>Thank you for your feedback</h3> <h5>We are glad that you love our product. Your ideas and suggestions will help us make it even better.</h5>"
     },
     {
      "html": "<h3>Thank you for your feedback</h3> <h5>We are glad that you shared your ideas with us. They will help us make our product better.</h5>"
     }
    ],
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "html",
        "name": "question4",
        "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/J-4q4Xj_1vE\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
       },
       {
        "type": "dropdown",
        "name": "promoter_features",
        "title": "1.Employee Completing Assessment",
        "isRequired": true,
        "validators": [
         {
          "type": "answercount",
          "text": "Please select two features maximum.",
          "maxCount": 2
         }
        ],
        "choices": [
         {
          "value": "Executive (C-Suite or Cabinet",
          "text": "Executive (C-Suite or Cabinet)"
         },
         "Human Resource Leader",
         "Communications/Marketing Leader",
         "Business/Department Leader"
        ],
        "showOtherItem": true,
        "otherText": "Other"
       },
       {
        "type": "checkbox",
        "name": "question2",
        "title": "Please indicate your sector",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Public"
         },
         {
          "value": "Item 2",
          "text": "Private"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question3",
        "title": "Which counties does yourorganization operate? (Check all that apply)",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Allegan"
         },
         {
          "value": "Item 2",
          "text": "Antrim"
         },
         {
          "value": "Item 3",
          "text": "Barry"
         },
         {
          "value": "Item 4",
          "text": "Benzie"
         },
         {
          "value": "Item 5",
          "text": "Berrien"
         },
         {
          "value": "Item 6",
          "text": "Branch"
         },
         {
          "value": "Item 7",
          "text": "Calhoun"
         },
         {
          "value": "Item 8",
          "text": "Cass"
         },
         {
          "value": "Item 9",
          "text": "Charlevoix"
         },
         {
          "value": "Item 10",
          "text": "Clinton"
         },
         {
          "value": "Item 11",
          "text": "Eaton"
         },
         {
          "value": "Item 12",
          "text": "Enmet"
         },
         {
          "value": "Item 13",
          "text": "Grand Traverse"
         },
         {
          "value": "Item 14",
          "text": "Hillsdale"
         },
         {
          "value": "Item 15",
          "text": "Ingham"
         },
         {
          "value": "Item 16",
          "text": "Ionia"
         },
         {
          "value": "Item 17",
          "text": "Kalamazoo"
         },
         {
          "value": "Item 18",
          "text": "Kalkaska"
         },
         {
          "value": "Item 19",
          "text": "Kent"
         },
         {
          "value": "Item 20",
          "text": "Lake"
         },
         {
          "value": "Item 21",
          "text": "Leelanau"
         },
         {
          "value": "Item 22",
          "text": "Manistee"
         },
         {
          "value": "Item 23",
          "text": "Mason"
         },
         {
          "value": "Item 24",
          "text": "Mecosta"
         },
         {
          "value": "Item 25",
          "text": "Missaukee"
         },
         {
          "value": "Item 26",
          "text": "Montcalm"
         },
         {
          "value": "Item 27",
          "text": "Muskegon"
         },
         {
          "value": "Item 28",
          "text": "Newaygo"
         },
         {
          "value": "Item 29",
          "text": "Oceana"
         },
         {
          "value": "Item 30",
          "text": "Osceola"
         },
         {
          "value": "Item 31",
          "text": "Ottawa"
         },
         {
          "value": "Item 32",
          "text": "St. Joseph"
         },
         {
          "value": "Item 33",
          "text": "Van Buren"
         },
         {
          "value": "Item 34",
          "text": "Wexford"
         }
        ]
       },
       {
        "type": "dropdown",
        "name": "question5",
        "title": "Please select your organization’s industry",
        "isRequired": true,
        "choices": [
         {
          "value": "Item 1",
          "text": "Agriculture"
         },
         "Education",
         {
          "value": "□  ",
          "text": "Government"
         },
         "Energy and Construction",
         {
          "value": "Item 2",
          "text": "Health Care"
         },
         {
          "value": "Item 3",
          "text": "IT and Media"
         },
         {
          "value": "Item 4",
          "text": "Manufacturing"
         },
         {
          "value": "Item 5",
          "text": "Professional Services"
         },
         {
          "value": "Item 6",
          "text": "Retail and Hospitality"
         }
        ],
        "showOtherItem": true
       }
      ],
      "description": "Introduction Video"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "text",
        "name": "question1"
       }
      ]
     }
    ],
    "showQuestionNumbers": "off"
   }