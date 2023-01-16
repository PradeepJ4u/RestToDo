const person = {
    name: 'Pradeep',
    address: {
        line1: "F-105, Ajnara Daffodil",
        line2: "Noida"
    },
    profile: ['twitter','linkedin', 'facebook'],
    printprofiles: () => {
        person.profile.map(
            profile => console.log(profile)
        )
    }
};

export default function LearningJavaScript () {
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.address.line2}</div>
            <div>{person.printprofiles ()}</div>
        </>
    )
}