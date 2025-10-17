<!--START_SECTION:waka-->
<!--END_SECTION:waka-->

## Time Logging

![playground repo](image.png)
![current-repo](image-2.png)

[![wakatime](https://wakatime.com/badge/user/436e4a6b-ccd5-49ff-b80f-1e57d59d7ee3/project/ad9d83ad-f56d-4fb8-a3f9-234f4d037069.svg)](https://wakatime.com/badge/user/436e4a6b-ccd5-49ff-b80f-1e57d59d7ee3/project/ad9d83ad-f56d-4fb8-a3f9-234f4d037069)
[![wakatime](https://wakatime.com/badge/user/436e4a6b-ccd5-49ff-b80f-1e57d59d7ee3/project/2111531b-3097-433a-8fe1-332419720db3.svg)](https://wakatime.com/badge/user/436e4a6b-ccd5-49ff-b80f-1e57d59d7ee3/project/2111531b-3097-433a-8fe1-332419720db3)

[playgroundRepo](https://github.com/tauheedbuttt/testing-nx) = 1h 50m  
currentTime in this repo = 8h 37m  
totalTime = 10h 27m

## ENUMS

```mermaid

erDiagram
    user_status_enum {
        ACTIVE active
        INACTIVE inactive
    }
    user_role_enum {
        ADMIN admin
        RIDER rider
        OWNER owner
    }
    payment_method_enum {
        CASH cash
        CARD card
    }
    payment_status_enum {
        PAID paid
        SKIPPED skipped
    }
```

## ERD

```mermaid

erDiagram
    USER {
        int id PK
        varchar userId UK "Auto Generated USER ID"
        varchar name
        varchar phone UK
        varchar email UK
        varchar cnic UK "National Identity Number"
        varchar address
        varchar password
        user_role_enum role
        user_status_enum status
    }

    HOUSE {
        int id PK
        varchar address
        varchar plotSize
        int fees "Taken from sector on creation, can be edited later on"
        int ownerId FK
        int sectorId FK
        int riderId FK "Taken from sector on creation, can be edited later on"
        varchar notes
    }

    SECTOR {
        int id PK
        varchar name
        int fees
        varchar description
        int riderId FK
    }

    PAYMENT {
        int id PK
        varchar recieptNumber UK
        int houseId FK
        int ownerId FK
        int amount
        timestamptz date
        int riderId FK
        payment_method_enum method
        payment_status_enum status
        varchar reason
    }

    SETTING {
        int id PK
        int defaultFees "base fees for sectors upon creation"
        int dueDay "day of the month e.g 1,21st"
        int lateFeePenalty "if due date missed"
        int gracePeriod "days after due date"
        boolean isEmail "send email notifications"
    }

    USER ||--o{ SECTOR: "rider for"
    SECTOR ||--o{ HOUSE : has

    USER ||--o{ HOUSE: owns
    HOUSE ||--o{ PAYMENT: has
    USER ||--o{ PAYMENT: "owner payment"
    USER ||--o{ PAYMENT: "rider collected"
```
