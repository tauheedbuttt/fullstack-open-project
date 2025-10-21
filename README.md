[![WakaTime](https://img.shields.io/badge/project-15%20hrs%2038%20mins-blue)](https://wakatime.com/@436e4a6b-ccd5-49ff-b80f-1e57d59d7ee3/projects/rzpbwqrxrj?start=2025-10-12&end=2025-10-18)

**⏱️ Total Time on project:** 11 hrs 50 mins

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
