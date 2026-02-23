import { useState } from "react";
import axios from "axios";


// Design Review - milestone 1

const ankitToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJfB+OtEda2UVH/g0dSI9GgP4Ko2qYTFEBw1+i/gzrq7AEisUsyHVkAV1mIldJ5AHqtjj/ojjrlI8JuipQ8O2ZOYqR5Ix92yqvIPIepimwiiqHhkDZ9N+j78bgNVKNM+8VLoPU0vzuA33GbXFpnh/XxywXj6ZNPelQCaufm2My/RK/NR9knJxOHKxckKnOXFuWFmAGpedI0LIun2dInes/oiFcp2NkW7s31Ds+AYKyUntl9zLcI07Ad9AnTapNDrsF/RRBxmxknwhsqUFlTR2vgQFfasHlT7DS8ObGwmnWx9XgrrsDnQy6eajrZWR4EL5hUL2lgcZR0eYy+PCCw6n8vpVSbmRK57LLJe/zKG5HDeQMcjrkd+fwAjI/p7+0cpYVd0oqhoNMn5GsxUKHFxJAHLRkN4XyOD9v4qdhtsgTAzrJ4KfxxLcXBTJvv6Hbc87nGGlKcdmsTbIuR08N0S7uXg=="
const ramToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJyIFUP38CPyowEVxrGyj0CxCLHL6oYQCdJxLWPSVBA27GJhiR9so7IubqXLIPO3w43JVPSmxEtGwDDZlsNpKRELw0Eu66ImxjbFzRkr9nvtPZEGWV2wjdz1jq6/HIQO6VpqD1hyhgU+oHQMvzZicyxKihFgMb8xR1Nn9ZzDmHEn2RQC6LAiQ24llb0TtzhkTK72+hfH3AWz+vmDn1REN4tsbU+vYjfkSCVUkLNFRZzXowq/lJpgAfGkA0EYEpysMT9jnUYKx5DTXWtFAXLLQtRbrR862E4JXUIwxQyaPHtHDjSdCU63iw8vL1ylIqpxYN4PLuDRMxM8MAiSlOqg1d4xNWMqGaScMhdGIzUqnPivSrNYBJ/oeY+dVg+JpctyThECq71lXTfa5bDgsyIeTFmm/b6bIKAQNTPoj1GmbsHXiJhqtKISWn5Skxjfkk03oLGF5dktXQcbrNbVlN1DKqA7HxN/n+zv1eqClG3XahGi8="
const shivaniToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJ22bhN6/xHt5NLbhIoy82b4D+2OpDyUJ3+4En+aeUOxNHY+TN3JIvsxeM21gktUaSUzWsirGUh5PO7uKgkxGFBtEagsX6TdZQnvMauHdSJq8wZpZ104x5ZXowOd0PcjSB3XNQ3Jvmq7YnZX8A0DBHO+yqfTLZ4oZv6M1jEUNMnqIEj6E3NWjQuyBDj4KKm08L/jaelK8STrRjJskcB129uPd1VLaWYQ3OgEeAAI2POPwPMACM8mPZO8GmUWrjVrG+XMsCWfShTRhF4SLU66KD898BpTeiVvd1h44fGSOQZbFst30J0Pxh7OMhovKdNQi0PlOZJykzGTgcwIzhXKKcY+FP8uiTXNX3iTccI/ONv/mE8Z0WOsD5fhDLWbuWoxy1mrVVYcT1lO6n9b3bZ9efYJ7bjztrwPzsl5Ac1JLZrfUDsF18ka04j1ATMwerXYegIGIA2J3CNyAhsxtLsIxtyTvR37HXLgA6gJdcs0zHMDk="
const akashToken="4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJ45Huv6KuDD3xnY15xcZrT9wRWEgKM8Jurt6cqZ1cPn3a7trtOZZcVOCAIfSewxcm0VWXoEAQEB4HCT5+owPr0Bu1XrXpzpRuBRl93LoEMKK0FQSD8bBqZqqhanyhp1lRcjEp/FWz2Lko8FxCRLmrREMMw7/UiRBFt4MzsKtc97sYsb8UgAbaa1sPOTZyAmoXuMooN5sX9EidcCM3NqzjIlyy4jmgSuhtfOHhNGX7/H1miaExbOASECKiIJ3i12MYYQpOFsZ4HnDVqNrsb3t0EYKDCbch5rEOIL6Ot/Ra0zmCxhlXE+hqYzj48SVN+D1XN6D1T93bqTzAetl11nv3cdQzqG4K2l6Rb4YW1K5NUDFwdeevXWjm0rPr58IckvU2WmMrcdHTHrIAu/jV2C6O0suBOam5zafUcseeDhSYAoJGIZqae/lBkQqomeEDZehCmhLvaPEVgdYXQVETsVmzEQ=="
const madhurToken='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJqEiNbcJSucA4WPPZGzdgxed0066Yu0Vf4UG9fEQoFIs6aoK2ihdatUj3fIlVGHJpasdvFg02BA7NJJlk3lhkfox1OBnrm8KCQItqUXMyFsCVvwHGzLvm5ms5y/pPgU0b4QN0+/HQ45uFsmHqURUzcZzvMrWy9azO3m0E2akLRN9u4n2D0mkEwrEPppUx7q49e+qLTY4HCqrUMJw7kXkywUM7T4v0/xsqyq8jhVMJyenwittfrgX/GYzy8/IaY9DYtXOolCGvvXotZqGZIOq61E3KB/nsK0vN4iGE80SlCoQICQ4Bxnr+NIiA0hUssUpu4hezakPBWORyosP+J6tW6aABN5NChJXkXEA4CnmV9NRQ0IRjclcC2yaXDq4cqYE13KBWOUUu5UxwV+j3d/YgHumRL4Og9xtqQo6a8rduN6JsiZauV2rAR263JWfvVNGE8wg5/Oey2HQo104IJXs9hh4OLBfGZvKySjukQJzTz7k='
const anilToken='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJw1ZV6VP2Nz6fo6psilcX6jpzsptplUn/rOXZDkVNRnYBs+gxHIPUnmh3KPAEYNCsY7MNICutiVnr5U7IqMtxRp4IvtoumG4I+b8M5J10Xz78nCdd7+1tIT69YhK6HbWvnD4XrlVxa1QElPK/1g1QrKJEGHa1ts0VXRRB3wFXgWP6R620jtE3nSDFF5s3hrrg2opzmw75xvOYfipLiLby/IX5g5MC+mpqUk6nzMZpZLzO4KzHj2Ya/xal/uUnZZK5lOdlwwwc/5tEVaZmAR0K8hNf5UyL4bRqs47xSHfUIHLfrYkoAzQEdzAL5OT0BvWy098BYU8gI74GXE90/hyjE9/aLzloVO8BTmx4xJJzNLDAtVx3o3hDH3HEL7j2tfnlc75gQ1Q4Wc+muuL91Hjj6lsE60qg/OL88PEjKkM0vHJn1RQd5779A9A+QvOXUBgyrfr1KseoKSECBFhKWHVXw2gAnr8BDzpsXIFSjGcI6AI='
const amarToken='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJkjC0WaFWRnA5zVsKB9c/ai5Zjtv3sWqFGNrQvz/OQQnxSpA73750fLzWR1+NZMtqGk15Ck0o6o6+wLw7AfzgBoeu1PnIILJQ0Z1guriH+q4n4taGiAJ1QjQLWDTxUp+VFqrTcf14myI+QH3yNi3DACsNxwsEwB8ENbUiKkITH7mkMrEDpF1tEd9Bxh0s8EFfgvcuFt/7tU1zMQvrSq8ds2/78uhUUDpQQiKu5eHufKfvP/RnWsOkHFOpB74wYm35kVxQH/cZ7yJPROOJsi1pjGvN1rRSuUfUWTKWYVZqh9u1rjXEVF5vHGs5ZbUU19+JZLKLSV8NBNu+SmXNkKeqdrzjjzazRW9Flt8NFNAa2vP7/0PAG/v2BFDrCH56Q2aoYFGFR4+R5WEOkqYdudGFRe8izn6gDccJozDef0YT8/tF6e/2WDTvoRin//D10HAxdBpzpqrBR8rzod++j0jz5Ep25t9DO51Ej87WcD6LEA0='
const gpToken='4Qw8CbN6g4yXq8Tvz5cam2hQ4+w8bcxtzd6urPhTQXmxNjwhtS1muNIkkQNaUxbJMteEnT+HbW5qI5qzhCLI2UO3OaZXNxbXpTq8drGjfRJVr04Z5q9wvToBXEi4mZI5pPo5COs4rTblJgRU4v1VmJT340LwMdnfmz3leMofO/fXNgwY9UNIcOXUM85HsqneHJ/mdIK3Mo8m04j9Wn8VsMLyjMFEzbCRbPZKKdW1LAPLCbS8Z550rASVkdTul5lUWpnU0/zAa1GNF1zjlRRGsHS3Ozae09jJB88nU2WHnprY10dyjEAb05TY2t06vvm45jNpCPkuzrYrePQsaDIhJJrIOseS1HS50jNuFdaK1aP4496es9MdOf9GTGrSLbXt7PS9+DpTY21Bv4jrlr9hY6FmSSmH+uRTv8HI5UKCkRsU85fhatnAhJg6+T60SXa7gdBC/0IU8QF30KJ2pr7Fxbq5lyZ/8yeGD6Mlc1IVkSi7AaTbC/8JkqWz66zg3n7zX/erFlKUqJzX+BkkfjdP32VdMOIpjPsbEKDXoSqNKhI=' 
const ticketId="6922ae9f5f3631ebb97801db"
const ticketIdS2="6922a96c5f3631ebb978009c"
const ticketIdS3="6922a9ea5f3631ebb97800c6"
const ticketIdS4="6922aa365f3631ebb97800db"
const ticketIdS5="6922acad5f3631ebb9780157"
const ticketIdS6="6922ad6d5f3631ebb9780198"
const ticketIdS7="6922ae1c5f3631ebb97801ad"
const ticketIdS8="6922ae585f3631ebb97801c2"
const ticketIdS9="6922ae9f5f3631ebb97801d7"
// const initialTickets =[
// {
// ticketId: ticketIdS1,
// token: madhurToken,
// consumedHours:"10:00",
// updatedDate:"2025-08-26 19:00:0",
// workingDay:"2025-08-26T04:30:00Z",
// description:`<ul>
// <li>Added Availability toggle UI on each menu item (On/Off).</li>
// <li>Displayed current availability status in Manage Menu list.</li>
// <li>Handled instant enable/disable via toggle.</li>
// </ul>`,
// consumedWorkDiscription:`<p>Implemented frontend availability toggle for menu items with immediate UI feedback and status display.</p>`
// }
// ];
// const raTickets = [

//   {
//     ticketId: ticketIdS1,
//     token: madhurToken,
//     consumedHours: "09:00",
//     updatedDate: "2025-09-02 18:00:00",
//     workingDay: "2025-09-02T09:00:00Z",
//     description: `<ul>
// <li>Reviewed Reservation Management Module scope and calendar requirements.</li>
// <li>Documented booking statuses, filtering, and role-based access needs.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Analyzed the Reservation Management Module to prepare clear requirements for calendar view, status API, and discount handling.</p>`
//   },
//   {
//     ticketId: ticketIdS1,
//     token: madhurToken,
//     consumedHours: "02:00",
//     updatedDate: "2025-09-03 11:00:00",
//     workingDay: "2025-09-03T09:00:00Z",
//     description: `<ul>
// <li>Finalized Reservation Lifecycle API requirements and SLA targets.</li>
// <li>Reviewed audit logging, error handling, and discount rules.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA for Reservation Lifecycle APIs and verified all requirements for implementation readiness.</p>`
//   },

//   // S2
//   {
//     ticketId: ticketIdS2,
//     token: madhurToken,
//     consumedHours: "09:00",
//     updatedDate: "2025-09-03 18:00:00",
//     workingDay: "2025-09-03T09:00:00Z",
//     description: `<ul>
// <li>Reviewed Social Login Module requirements (Google, Facebook, Apple).</li>
// <li>Documented frontend UI design, accessibility, and branding compliance.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Performed RA for social login flows, client SDK integration, and backend token verification requirements.</p>`
//   },
//   {
//     ticketId: ticketIdS2,
//     token: madhurToken,
//     consumedHours:  "08:00",
//     updatedDate: "2025-09-04 17:00:00",
//     workingDay: "2025-09-04T09:00:00Z",
//     description: `<ul>
// <li>Analyzed error handling, network fallbacks, and secure database storage.</li>
// <li>Reviewed API requirements and role-based access needs.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed detailed RA for Social Login Module backend, error handling, and data storage requirements.</p>`
//   },

//   // S3
//   {
//     ticketId: ticketIdS3,
//     token: madhurToken,
//     consumedHours: "06:00",
//     updatedDate: "2025-09-05 15:00:00",
//     workingDay: "2025-09-05T09:00:00Z",
//     description: `<ul>
// <li>Analyzed Edit User Module requirements for editable fields, validation, and role-based access.</li>
// <li>Reviewed audit trail and UI feedback requirements.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Conducted RA for Edit User Module to ensure proper mapping of frontend and backend requirements.</p>`
//   },

//   // S4
//   {
//     ticketId: ticketIdS4,
//     token: madhurToken,
//     consumedHours: "06:00",
//     updatedDate: "2025-09-08 15:00:00",
//     workingDay: "2025-09-08T09:00:00Z",
//     description: `<ul>
// <li>Reviewed Order History Module data display, filtering, and sorting requirements.</li>
// <li>Documented role-based access and performance targets.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Performed RA for Order History Module, focusing on UI, API, and access control documentation.</p>`
//   },

//   // S5
//   {
//     ticketId: ticketIdS5,
//     token: madhurToken,
//     consumedHours: "05:00",
//     updatedDate: "2025-09-09 14:00:00",
//     workingDay: "2025-09-09T09:00:00Z",
//     description: `<ul>
// <li>Analyzed Customer Management Module requirements: search, filter, and pagination.</li>
// <li>Reviewed key fields, role-based access, and UI guidelines.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA for Customer Management Module, documenting frontend and backend requirements.</p>`
//   },

//   // S6
//   {
//     ticketId: ticketIdS6,
//     token: madhurToken,
//     consumedHours: "02:00",
//     updatedDate: "2025-09-10 11:00:00",
//     workingDay: "2025-09-10T09:00:00Z",
//     description: `<ul>
// <li>Reviewed Vendor Management Module requirements and key data fields.</li>
// <li>Documented search, filter, and status indicator needs.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Performed RA for Vendor Management Module, mapping requirements for UI and backend data handling.</p>`
//   },

//   // S7
//   {
//     ticketId: ticketIdS7,
//     token: madhurToken,
//     consumedHours: "02:00",
//     updatedDate: "2025-09-10 13:00:00",
//     workingDay: "2025-09-10T11:00:00Z",
//     description: `<ul>
// <li>Analyzed Suspend User Module requirements: role-based access, audit logs, and session invalidation.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA for Suspend User Module ensuring all analysis points were captured for secure implementation.</p>`
//   },

//   // S8
//   {
//     ticketId: ticketIdS8,
//     token: madhurToken,
//     consumedHours: "09:00",
//     updatedDate: "2025-09-11 18:00:00",
//     workingDay: "2025-09-11T09:00:00Z",
//     description: `<ul>
// <li>Reviewed Compliance & Approval Module scope, submission types, and workflows.</li>
// <li>Documented approval/rejection process, RBAC, and audit log requirements.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Performed RA for Compliance & Approval Module, mapping frontend and backend workflow requirements for traceability and performance.</p>`
//   },
//   {
//     ticketId: ticketIdS8,
//     token: madhurToken,
//     consumedHours: "06:00",
//     updatedDate: "2025-09-12 15:00:00",
//     workingDay: "2025-09-12T09:00:00Z",
//     description: `<ul>
// <li>Analyzed document verification, multi-file support, and real-time status updates.</li>
// <li>Reviewed performance and auditability targets for backend APIs.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA for Compliance & Approval Module backend requirements, finalizing all analysis points.</p>`
//   },

//   // S9
//   {
//     ticketId: ticketIdS9,
//     token: madhurToken,
//     consumedHours: "06:00",
//     updatedDate: "2025-09-15 15:00:00",
//     workingDay: "2025-09-15T09:00:00Z",
//     description: `<ul>
// <li>Reviewed Role Management Module requirements: role creation, permission matrix, and validation.</li>
// <li>Documented audit logging, ACID transactions, and hierarchical permissions.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Performed RA for Role Management Module ensuring all RBAC and UI/backend requirements were captured.</p>`
//   }
// ];

// const raReviewTickets = [
//   // S1 Review (RA tickets ended 2025-09-03 11:00:00)
//   {
//     ticketId: ticketIdS1,
//     token: anilToken,
//     consumedHours: "3:00",
//     updatedDate: "2025-09-03 14:00:00",
//     workingDay: "2025-09-03T11:00:00Z",
//     description: `<ul>
// <li>Reviewed Reservation Management Module RA tickets for completeness of calendar, status, discount, and lifecycle requirements.</li>
// <li>Checked clarity of task description and consumed work description.</li>
// <li>Validated SLA targets, role-based access notes, and audit logging documentation.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S1, confirming all requirements were properly analyzed and documented for the development team.</p>`
//   },

//   // S2 Review (RA tickets ended 2025-09-04 17:00:00)
//   {
//     ticketId: ticketIdS2,
//     token: anilToken,
//     consumedHours: "2:00",
//     updatedDate: "2025-09-04 19:00:00",
//     workingDay: "2025-09-04T17:00:00Z",
//     description: `<ul>
// <li>Reviewed Social Login Module RA tickets for frontend, SDK, backend, and database requirements.</li>
// <li>Verified accessibility, branding compliance, and error handling documentation.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S2, ensuring analysis captured all login flows and backend requirements.</p>`
//   },

//   // S3 Review (RA ticket ended 2025-09-05 15:00:00)
//   {
//     ticketId: ticketIdS3,
//     token: anilToken,
//     consumedHours: "2:00",
//     updatedDate: "2025-09-05 17:00:00",
//     workingDay: "2025-09-05T15:00:00Z",
//     description: `<ul>
// <li>Reviewed Edit User Module RA tickets for field validation, audit trails, and role-based access documentation.</li>
// <li>Checked UI responsiveness and success/error feedback notes.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S3, confirming all analysis points are documented and clear.</p>`
//   },

//   // S4 Review (RA ticket ended 2025-09-08 15:00:00)
//   {
//     ticketId: ticketIdS4,
//     token: anilToken,
//     consumedHours: "2:00",
//     updatedDate: "2025-09-08 17:00:00",
//     workingDay: "2025-09-08T15:00:00Z",
//     description: `<ul>
// <li>Reviewed Order History Module RA tickets for data display, filtering, sorting, and role-based access.</li>
// <li>Validated performance targets and completeness of analysis.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S4, ensuring frontend and backend requirements were properly analyzed.</p>`
//   },

//   // S5 Review (RA ticket ended 2025-09-09 14:00:00)
//   {
//     ticketId: ticketIdS5,
//     token: anilToken,
//     consumedHours: "1:00",
//     updatedDate: "2025-09-09 15:00:00",
//     workingDay: "2025-09-09T14:00:00Z",
//     description: `<ul>
// <li>Reviewed Customer Management Module RA tickets for search, filter, pagination, and role-based access documentation.</li>
// <li>Validated clarity and completeness of key field analysis.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S5, confirming all requirements were documented accurately.</p>`
//   },

//   // S6 Review (RA ticket ended 2025-09-10 11:00:00)
//   {
//     ticketId: ticketIdS6,
//     token: anilToken,
//     consumedHours: "1:00",
//     updatedDate: "2025-09-10 12:00:00",
//     workingDay: "2025-09-10T11:00:00Z",
//     description: `<ul>
// <li>Reviewed Vendor Management Module RA tickets for field details, search, filter, and status indicators.</li>
// <li>Verified clarity and correctness of analysis points.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S6, ensuring analysis is ready for development handoff.</p>`
//   },

//   // S7 Review (RA ticket ended 2025-09-10 13:00:00)
//   {
//     ticketId: ticketIdS7,
//     token: anilToken,
//     consumedHours: "1:00",
//     updatedDate: "2025-09-10 14:00:00",
//     workingDay: "2025-09-10T13:00:00Z",
//     description: `<ul>
// <li>Reviewed Suspend User Module RA tickets for role-based access, session invalidation, and audit logging.</li>
// <li>Checked completeness of analysis and clarity of documentation.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S7, confirming all functional analysis points are captured.</p>`
//   },

//   // S8 Review (RA tickets ended 2025-09-12 15:00:00)
//   {
//     ticketId: ticketIdS8,
//     token: anilToken,
//     consumedHours: "2:00",
//     updatedDate: "2025-09-12 17:00:00",
//     workingDay: "2025-09-12T15:00:00Z",
//     description: `<ul>
// <li>Reviewed Compliance & Approval Module RA tickets for workflow, document verification, RBAC, and audit logs.</li>
// <li>Validated real-time status update and performance documentation.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S8, ensuring all requirements and workflows were properly analyzed and ready for development.</p>`
//   },

//   // S9 Review (RA ticket ended 2025-09-15 15:00:00)
//   {
//     ticketId: ticketIdS9,
//     token: anilToken,
//     consumedHours: "1:00",
//     updatedDate: "2025-09-15 16:00:00",
//     workingDay: "2025-09-15T15:00:00Z",
//     description: `<ul>
// <li>Reviewed Role Management Module RA tickets for role creation, permission matrix, audit logging, and hierarchical permissions.</li>
// <li>Checked completeness and clarity of analysis.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed RA review for S9, confirming all RBAC and module requirements are documented correctly.</p>`
//   }
// ];

// const designTickets = [
//   // S1 Design Tickets
//   {
//     ticketId: ticketIdS1,
//     token: madhurToken,
//     consumedHours: "9:00",
//     updatedDate: "2025-09-03 23:00:00",
//     workingDay: "2025-09-03T14:00:00Z",
//     description: `<ul>
// <li>Designed architecture for Reservation Management Module: data flow, API endpoints, and UI/UX integration.</li>
// <li>Checked scalability, performance, and calendar view handling.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed initial design for Reservation Management Module covering backend APIs, frontend components, and integration plan.</p>`
//   },
//   {
//     ticketId: ticketIdS1,
//     token: amarToken,
//     consumedHours: "1:00",
//     updatedDate: "2025-09-04 00:00:00",
//     workingDay: "2025-09-03T23:00:00Z",
//     description: `<ul>
// <li>Finalized design notes, edge cases, and SLA compliance checks.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Wrapped up design for Reservation Management Module including edge-case considerations and performance notes.</p>`
//   },

//   // S2 Design Tickets
//   {
//     ticketId: ticketIdS2,
//     token: amarToken,
//     consumedHours: "9:00",
//     updatedDate: "2025-09-05 02:00:00",
//     workingDay: "2025-09-04T19:00:00Z",
//     description: `<ul>
// <li>Designed Social Login Module architecture including frontend flow, backend token validation, and SDK integration.</li>
// <li>Checked security, error handling, and database schema alignment.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed main design for Social Login Module with architecture, integration points, and security checks.</p>`
//   },
//   {
//     ticketId: ticketIdS2,
//     token: amarToken,
//     consumedHours: "6:00",
//     updatedDate: "2025-09-05 08:00:00",
//     workingDay: "2025-09-05T02:00:00Z",
//     description: `<ul>
// <li>Reviewed UI/UX design, accessibility, and responsive considerations.</li>
// <li>Finalized backend integration and API workflow design.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Wrapped up Social Login Module design, ensuring UX compliance, API design, and edge cases are covered.</p>`
//   },

//   // S3 Design Ticket
//   {
//     ticketId: ticketIdS3,
//     token: amarToken,
//     consumedHours: "4:00",
//     updatedDate: "2025-09-05 21:00:00",
//     workingDay: "2025-09-05T17:00:00Z",
//     description: `<ul>
// <li>Designed Edit User Module architecture for frontend form handling and backend validation.</li>
// <li>Checked audit trail and role-based access design.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed Edit User Module design including frontend, API, and security considerations.</p>`
//   },

//   // S4 Design Ticket
//   {
//     ticketId: ticketIdS4,
//     token: amarToken,
//     consumedHours: "6:00",
//     updatedDate: "2025-09-08 21:00:00",
//     workingDay: "2025-09-08T17:00:00Z",
//     description: `<ul>
// <li>Designed Order History Module architecture: pagination, filtering, and backend query optimization.</li>
// <li>Reviewed UI/UX alignment with design system.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed Order History Module design covering frontend and backend integration points and performance optimization.</p>`
//   },

//   // S5 Design Ticket
//   {
//     ticketId: ticketIdS5,
//     token: amarToken,
//     consumedHours: "4:00",
//     updatedDate: "2025-09-09 18:00:00",
//     workingDay: "2025-09-09T14:00:00Z",
//     description: `<ul>
// <li>Designed Customer Management Module architecture: search, filter, pagination, and quick preview panels.</li>
// <li>Checked role-based access and UI responsiveness.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed Customer Management Module design covering frontend, API, and access control.</p>`
//   },

//   // S6 Design Ticket
//   {
//     ticketId: ticketIdS6,
//     token: amarToken,
//     consumedHours: "2:00",
//     updatedDate: "2025-09-10 13:00:00",
//     workingDay: "2025-09-10T11:00:00Z",
//     description: `<ul>
// <li>Designed Vendor Management Module architecture: data display, search/filter, status indicators.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed Vendor Management Module design including UI layout and backend data mapping.</p>`
//   },

//   // S7 Design Ticket
//   {
//     ticketId: ticketIdS7,
//     token: amarToken,
//     consumedHours: "2:00",
//     updatedDate: "2025-09-10 15:00:00",
//     workingDay: "2025-09-10T13:00:00Z",
//     description: `<ul>
// <li>Designed Suspend User Module architecture: role-based access, session invalidation, and audit logs.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed Suspend User Module design ensuring secure architecture and proper workflow mapping.</p>`
//   },

//   // S8 Design Tickets
//   {
//     ticketId: ticketIdS8,
//     token: amarToken,
//     consumedHours: "9:00",
//     updatedDate: "2025-09-12 00:00:00",
//     workingDay: "2025-09-12T15:00:00Z",
//     description: `<ul>
// <li>Designed Compliance & Approval Module architecture: document verification, workflow, RBAC, and audit logging.</li>
// <li>Checked frontend and backend integration, performance, and scalability.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed initial Compliance & Approval Module design covering all key architecture and workflow points.</p>`
//   },
//   {
//     ticketId: ticketIdS8,
//     token: amarToken,
//     consumedHours: "4:00",
//     updatedDate: "2025-09-12 04:00:00",
//     workingDay: "2025-09-12T00:00:00Z",
//     description: `<ul>
// <li>Reviewed edge cases, multi-file handling, and real-time updates for compliance module.</li>
// <li>Finalized design documentation and integration plan.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Wrapped up Compliance & Approval Module design, ensuring all edge cases and workflows are covered.</p>`
//   },

//   // S9 Design Ticket
//   {
//     ticketId: ticketIdS9,
//     token: amarToken,
//     consumedHours: "4:00",
//     updatedDate: "2025-09-15 20:00:00",
//     workingDay: "2025-09-15T16:00:00Z",
//     description: `<ul>
// <li>Designed Role Management Module architecture: permission matrix, hierarchical selection, audit logging.</li>
// <li>Checked RBAC workflow and edge cases.</li>
// </ul>`,
//     consumedWorkDiscription: `<p>Completed Role Management Module design covering frontend, backend, and audit requirements.</p>`
//   }
// ];


// const designReviewTickets = [

// /* S1 */
// {
//   ticketId: ticketIdS1,
//   token: gpToken,
//   consumedHours: "3:00",
//   workingDay: "2025-09-04T00:00:00Z",
//   updatedDate: "2025-09-04 03:00:00",
//   description: `<ul>
// <li>Reviewed Reservation Management design architecture.</li>
// <li>Validated UI workflow, API contracts, and scalability approach.</li>
// <li>Provided feedback on edge cases and data consistency.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Completed design review for Reservation module and shared architectural feedback.</p>`
// },

// /* S2 */
// {
//   ticketId: ticketIdS2,
//   token: gpToken,
//   consumedHours: "4:00",
//   workingDay: "2025-09-05T08:00:00Z",
//   updatedDate: "2025-09-05 12:00:00",
//   description: `<ul>
// <li>Reviewed Social Login design including security flow and token validation.</li>
// <li>Validated frontend–backend integration approach.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Reviewed Social Login architecture and provided UX + security recommendations.</p>`
// },

// /* S3 */
// {
//   ticketId: ticketIdS3,
//   token: gpToken,
//   consumedHours: "2:00",
//   workingDay: "2025-09-05T21:00:00Z",
//   updatedDate: "2025-09-05 23:00:00",
//   description: `<ul>
// <li>Reviewed Edit User Module design.</li>
// <li>Validated role-based access and audit trail implementation.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Completed design review for Edit User module.</p>`
// },

// /* S4 */
// {
//   ticketId: ticketIdS4,
//   token: gpToken,
//   consumedHours: "2:00",
//   workingDay: "2025-09-08T21:00:00Z",
//   updatedDate: "2025-09-08 23:00:00",
//   description: `<ul>
// <li>Reviewed Order History design flow.</li>
// <li>Validated pagination and backend query strategy.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Reviewed Order History design and shared optimization suggestions.</p>`
// },

// /* S5 */
// {
//   ticketId: ticketIdS5,
//   token: gpToken,
//   consumedHours: "1:00",
//   workingDay: "2025-09-09T18:00:00Z",
//   updatedDate: "2025-09-09 19:00:00",
//   description: `<ul>
// <li>Reviewed Customer Management module design.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Validated Customer Management design.</p>`
// },

// /* S6 */
// {
//   ticketId: ticketIdS6,
//   token: gpToken,
//   consumedHours: "1:00",
//   workingDay: "2025-09-10T13:00:00Z",
//   updatedDate: "2025-09-10 14:00:00",
//   description: `<ul>
// <li>Reviewed Vendor Management design.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Completed Vendor Management design review.</p>`
// },

// /* S7 */
// {
//   ticketId: ticketIdS7,
//   token: gpToken,
//   consumedHours: "1:00",
//   workingDay: "2025-09-10T15:00:00Z",
//   updatedDate: "2025-09-10 16:00:00",
//   description: `<ul>
// <li>Reviewed Suspend User workflow and security design.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Validated Suspend User design.</p>`
// },

// /* S8 */
// {
//   ticketId: ticketIdS8,
//   token: gpToken,
//   consumedHours: "4:00",
//   workingDay: "2025-09-12T04:00:00Z",
//   updatedDate: "2025-09-12 08:00:00",
//   description: `<ul>
// <li>Reviewed Compliance & Approval architecture.</li>
// <li>Validated document workflow, RBAC, and audit logging.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Completed Compliance module design review with architectural feedback.</p>`
// },

// /* S9 */
// {
//   ticketId: ticketIdS9,
//   token: gpToken,
//   consumedHours: "2:00",
//   workingDay: "2025-09-15T20:00:00Z",
//   updatedDate: "2025-09-15 22:00:00",
//   description: `<ul>
// <li>Reviewed Role Management permission matrix and hierarchy.</li>
// </ul>`,
//   consumedWorkDiscription: `<p>Completed Role Management design review.</p>`
// }

// ];







 const designReviewTickets =[
  {
    ticketId: ticketId,
    token: ankitToken,
    consumedHours: "4:00",
    updatedDate: "2025-09-30 13:00:00",
    workingDay: "2025-09-30T09:00:00Z",
    description: "<ul><li>Review User Role Management (Admin) functional implementation.</li><li>Evaluate code quality, structure, and adherence to coding standards.</li><li>Verify business logic, role-permission validations, and API contract consistency.</li><li>Assess error handling, test coverage, and document review findings.</li></ul>",
    consumedWorkDiscription: "<p>Completed detailed review of User Role Management (Admin) module covering validation logic, API consistency, architectural compliance, and documented findings for final approval.</p>"
  }
]
 
 

 





const AddComments = () => {
    const [tickets] = useState(designReviewTickets);
    const [loading, setLoading] = useState(false);

    const submitAll = async () => {
        setLoading(true);

        for (const item of tickets) {
            const payload = {
                ticketId: item.ticketId,
                description: item.description,
                createdDate: item.updatedDate
            };
            const consumedPayload = {
                ticketId: item.ticketId,
                consumedHours: item.consumedHours,
                workDiscription: item.consumedWorkDiscription,
                workingDay: item.workingDay
            };
            const token = item.token;
            try {
                await axios.post("http://seasiaprojectmgt.com/api/v1/Ticket/AddTicketComment", payload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                await axios.post("http://seasiaprojectmgt.com/api/v1/Ticket/OfflineWorkHours/Add", consumedPayload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                // optional delay
                await new Promise((res) => setTimeout(res, 500));
            } catch (error: any) {
                alert(`Failed to submit Ticket ID: ${item.ticketId}`);
                setLoading(false);
                return;
            }
        }

        alert("All descriptions submitted successfully 🎉");
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    Code Review Descriptions
                </h2>
  <div>Total Tickets <span className="text-xl font-semibold">{tickets.length}</span> total hourse: <span className="text-xl font-semibold">{tickets.length * 7.86}</span>  </div>  
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden mb-6">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left px-4 py-3 text-gray-600 font-semibold">
                                Ticket ID
                            </th>
                            <th className="text-left px-4 py-3 text-gray-600 font-semibold">
                                Updated Date
                            </th>
                        </tr>
                    </thead>
                                    <tbody>
                        {tickets.map((item) => (
                            <tr key={item.ticketId} className="border-t">
                                <td className="px-4 py-3 text-gray-700">{item.ticketId}</td>
                                <td className="px-4 py-3 text-gray-700">{item.updatedDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-end">
                    <button
                        onClick={submitAll}
                        disabled={loading}
                        className={`px-6 py-3 rounded-lg text-white font-medium transition-all
              ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700 active:scale-95"
                            }`}
                    >
                        {loading ? "Submitting..." : "Submit All"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddComments;
