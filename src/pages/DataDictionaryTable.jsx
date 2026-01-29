import { useState, useEffect, } from "react";


export default function DataDictionaryTable({dataType}) {
 const [dataDictionary, setDataDictionary] = useState([]);
 console.log(dataType);

    const accountDataDictionary = [
   {
    column: "account_id",
    datatype: "string (UUID)",
    pii: "No",
    description: "Unique, anonymized identifier for the account",
    acceptableValues: "UUID format",
  },
  {
    column: "member_id",
    datatype: "string (UUID)",
    pii: "No",
    description: "Anonymized identifier linking account to member",
    acceptableValues: "UUID format",
  },
  {
    column: "account_type",
    datatype: "string",
    pii: "No",
    description: "Type of financial account",
    acceptableValues: "Checking, Savings, Money Market, Loan, Credit Card",
  },
  {
    column: "account_number_masked",
    datatype: "string",
    pii: "Yes",
    description: "Masked account number for display purposes",
    acceptableValues: "Last 4 digits only",
  },
  {
    column: "account_status",
    datatype: "string",
    pii: "No",
    description: "Current status of the account",
    acceptableValues: "Active, Inactive, Closed, Charged-Off",
  },
  {
    column: "open_date",
    datatype: "date",
    pii: "No",
    description: "Date the account was opened",
    acceptableValues: "ISO 8601 date",
  },
  {
    column: "close_date",
    datatype: "date",
    pii: "No",
    description: "Date the account was closed (if applicable)",
    acceptableValues: "ISO 8601 date or null",
  },
  {
    column: "current_balance",
    datatype: "decimal(12,2)",
    pii: "No",
    description: "Current available balance",
    acceptableValues: "Numeric",
  },
  {
    column: "available_balance",
    datatype: "decimal(12,2)",
    pii: "No",
    description: "Funds available for withdrawal or use",
    acceptableValues: "Numeric",
  },
  {
    column: "interest_rate",
    datatype: "decimal(5,3)",
    pii: "No",
    description: "Annual interest rate applied to the account",
    acceptableValues: "0.000–100.000",
  },
  {
    column: "credit_limit",
    datatype: "decimal(12,2)",
    pii: "No",
    description: "Maximum credit limit for credit-based accounts",
    acceptableValues: "≥ 0 or null",
  },
  {
    column: "payment_due_date",
    datatype: "date",
    pii: "No",
    description: "Next scheduled payment due date",
    acceptableValues: "ISO 8601 date or null",
  },
  {
    column: "last_activity_date",
    datatype: "date",
    pii: "No",
    description: "Most recent transaction date",
    acceptableValues: "ISO 8601 date",
  },
  {
    column: "currency_code",
    datatype: "string",
    pii: "No",
    description: "Currency used for the account",
    acceptableValues: "ISO 4217 (e.g., USD)",
  },
  {
    column: "branch_id",
    datatype: "string",
    pii: "No",
    description: "Identifier of the servicing branch",
    acceptableValues: "Internal branch codes",
  },
  {
    column: "created_at",
    datatype: "timestamp",
    pii: "No",
    description: "Timestamp when record was created",
    acceptableValues: "ISO 8601 timestamp",
  },
  {
    column: "updated_at",
    datatype: "timestamp",
    pii: "No",
    description: "Timestamp of last record update",
    acceptableValues: "ISO 8601 timestamp",
  },

];
const memberDataDictionary = [
  {
    column: "member_id",
    datatype: "string (UUID)",
    pii: "No",
    description: "Unique, anonymized identifier for each member",
    acceptableValues: "UUID format",
  },
  {
    column: "first_name",
    datatype: "string",
    pii: "Yes",
    description: "Member's first name",
    acceptableValues: "Alphabetic characters",
  },
  {
    column: "last_name",
    datatype: "string",
    pii: "Yes",
    description: "Member's last name",
    acceptableValues: "Alphabetic characters",
  },
  {
    column: "email_address",
    datatype: "string",
    pii: "Yes",
    description: "Primary email address of the member",
    acceptableValues: "Valid email format",
  },
  {
    column: "phone_number",
    datatype: "string",
    pii: "Yes",
    description: "Member's contact phone number",
    acceptableValues: "Valid phone number format",
  },
  {
    column: "date_of_birth",
    datatype: "date",
    pii: "Yes",
    description: "Member's date of birth",
    acceptableValues: "ISO 8601 date format",
  },
  {
    column: "address",
    datatype: "string",
    pii: "Yes",
    description: "Member's residential address",
    acceptableValues: "Street, city, state, postal code",
  },
  {
    column: "membership_start_date",
    datatype: "date",
    pii: "No",
    description: "Date when member joined the credit union",
    acceptableValues: "ISO 8601 date format",
  },
  {
    column: "membership_status",
    datatype: "string",
    pii: "No",
    description: "Current status of the membership",
    acceptableValues: "Active, Inactive, Closed",
  },
  {
    column: "preferred_language",
    datatype: "string",
    pii: "No",
    description: "Member's preferred language for communication",
    acceptableValues: "ISO 639-1 codes or full language names",
  },
  {
    column: "created_at",
    datatype: "timestamp",
    pii: "No",
    description: "Timestamp when the member record was created",
    acceptableValues: "ISO 8601 timestamp",
  },
  {
    column: "updated_at",
    datatype: "timestamp",
    pii: "No",
    description: "Timestamp when the member record was last updated",
    acceptableValues: "ISO 8601 timestamp",
  },
];

const channelDataDictionary = [
  {
    column: "channel_id",
    datatype: "string (UUID)",
    pii: "No",
    description: "Unique identifier for the channel",
    acceptableValues: "UUID format",
  },
  {
    column: "channel_name",
    datatype: "string",
    pii: "No",
    description: "Name of the channel",
    acceptableValues: "Web, Mobile App, Branch, ATM, Call Center, Email, SMS",
  },
  {
    column: "channel_type",
    datatype: "string",
    pii: "No",
    description: "Type of channel",
    acceptableValues: "Digital, Physical, Phone, Email, SMS",
  },
  {
    column: "channel_status",
    datatype: "string",
    pii: "No",
    description: "Current operational status of the channel",
    acceptableValues: "Active, Inactive, Deprecated",
  },
  {
    column: "member_id",
    datatype: "string (UUID)",
    pii: "No",
    description: "ID of the member associated with channel usage",
    acceptableValues: "UUID format or null if unassigned",
  },
  {
    column: "last_used_date",
    datatype: "date",
    pii: "No",
    description: "Date when the channel was last used by the member",
    acceptableValues: "ISO 8601 date or null",
  },
  {
    column: "preferred_channel",
    datatype: "boolean",
    pii: "No",
    description: "Indicates if this channel is the member's preferred channel",
    acceptableValues: "true / false",
  },
  {
    column: "created_at",
    datatype: "timestamp",
    pii: "No",
    description: "Timestamp when the channel record was created",
    acceptableValues: "ISO 8601 timestamp",
  },
  {
    column: "updated_at",
    datatype: "timestamp",
    pii: "No",
    description: "Timestamp when the channel record was last updated",
    acceptableValues: "ISO 8601 timestamp",
  },
];

useEffect(() => {
  if (dataType === 0) {
    setDataDictionary(accountDataDictionary);
  } else if (dataType === 1) {
    setDataDictionary(memberDataDictionary);
  }
  else if (dataType === 2) {
    setDataDictionary(channelDataDictionary);
  }
  
}, [dataType]); 
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-semibold mb-6">Data Dictionary</h1>

      <div className="overflow-x-auto rounded-lg border">
        <table className="min-w-full border-collapse bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Column
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Datatype
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                PII
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Description
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Acceptable Values
              </th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {dataDictionary.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-mono text-gray-900">
                  {row.column}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {row.datatype}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      row.pii === "Yes"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {row.pii}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {row.description}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700">
                  {row.acceptableValues}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
