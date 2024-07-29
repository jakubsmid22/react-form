const fields = [
    {
        label: "First Name",
        placeholder: "Enter First Name",
        id: "firstName",
        required: true
    },
    {
        label: "Last Name",
        placeholder: "Enter Last Name",
        id: "lastName",
        required: true
    },
    {
        label: "Email",
        placeholder: "Enter Email",
        id: "email",
        required: true
    }
];

const telNums = [
        {
            label: "Contact",
            placeholder: "Enter Mobile Number",
            id: "contact",
            required: true
        }
]

const radios = [
    {
        label: "Gender",
        radios: [
            { value: "Male", text: "Male" }, 
            { value: "Female", text: "Female" }, 
            { value: "Other", text: "Other" }
        ],
        required: true,
        id: "gender"
    }
];

const files = [
    {
        label: "Upload Resume",
        id: "resume",
        required: true
    }
]

const urls = [
    {
        label: "Enter URL",
        placeholder: "Enter url",
        id: "url",
        required: true
    }
]

const selects = [
        {
            label: "Select your choice",
            id: "choice",
            answers: ["answer1", "answer2"],
            required: false
        }
]

export { fields, radios, files, urls, selects, telNums };
