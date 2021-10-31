var studentsList = [
    {
        id: 1,
        name: "Odilov Suxrobbek Shuxrat o'g'li",
        course: 1,
        group: 'HBA-81',
        ielts: '7.5',
        ball: '160.5',
        address: 'Toshkent shahar, Shayhontoxur tumani,Matlubot-3,5-uy',
        telnumber: '+998991201218'
    },
    {
        id: 2,
        name: "Ketmonov Abdug'ani Tesha o'g'li",
        course: 2,
        group: 'HBA-80',
        ielts: '6.5',
        ball: '159.5',
        address: "Toshkent shahar,Uchtepa tumani,Hondamir-1,26-uy",
        telnumber: '+998909901618'
    },
    {
        id: 3,
        name: "Eshonqulov Mirzaterak Holmo'min o'g'li",
        course: 1,
        group: 'BI-81',
        ielts: '7.0',
        ball: '165.5',
        address: "Bog'-2,6-uy",
        telnumber: '+998977971717'
    },
    {
        id: 4,
        name: "Buqayev Sigirali Molxona",
        course: 2,
        group: 'HBA-80',
        ielts: '6.5',
        ball: '156.5',
        address: "Chog'-1,13-uy",
        telnumber: '+998909977718'
    },
]
studentListGet()


function studentListGet() {
    document.getElementById('students-list-result').innerHTML = ''
    for (i = 0; i < studentsList.length; i++) {
        document.getElementById('students-list-result').innerHTML +=
            '<tr>' +
            '<td>' + (i + 1) + '</td>' +
            '<td>' + studentsList[i].name + '</td>' +
            '<td>' + studentsList[i].course + '</td>' +
            '<td>' + studentsList[i].group + '</td>' +
            '<td>' + studentsList[i].ielts + '</td>' +
            '<td>' + studentsList[i].ball + '</td>' +
            '<td>' + studentsList[i].address + '</td>' +
            '<td>' + studentsList[i].telnumber + '</td>' +
            '<td><button onclick=removeStudent(' + studentsList[i].id + ') class="btn btn-outline-info btn-block">Delete</button></td>' +
            '</tr>'
    }
}

function addNewStudent() {
    var student_id = Math.floor((Math.random() * 1000000) + 1)
    var student_name = document.forms['student-form']['name'].value
    var student_course = document.forms['student-form']['course'].value
    var student_group = document.forms['student-form']['group'].value
    var student_ielts = document.forms['student-form']['ielts'].value
    var student_ball = document.forms['student-form']['ball'].value
    var student_address = document.forms['student-form']['address'].value
    var student_telnumber = document.forms['student-form']['telnumber'].value
    var newStudent = {
        id: '',
        name: '',
        course: '',
        group: '',
        ielts: '',
        ball: '',
        address: '',
        telnumber: '',
    }
    if (student_name !== '' && student_course !== '' && student_group !== '' && student_ielts !== '' && student_ball !== '' && student_address !== '' && student_telnumber !== '') {
        newStudent = {
            id: student_id,
            name: student_name,
            course: student_course,
            group: student_group,
            ielts: student_ielts,
            ball: student_ball,
            address: student_address,
            telnumber: student_telnumber,
        }
        studentsList.push(newStudent)
        document.forms['student-form']['name'].value = ''
        document.forms['student-form']['course'].value = ''
        document.forms['student-form']['group'].value = ''
        document.forms['student-form']['ielts'].value = ''
        document.forms['student-form']['ball'].value = ''
        document.forms['student-form']['address'].value = ''
        document.forms['student-form']['telnumber'].value = ''
        studentListGet()
    } else {
        window.alert("Please, complete all your information")
    }
}

function removeStudent(id) {
    for (i = 0; i < studentsList.length; i++) {
        if (id === studentsList[i].id) {
            studentsList.splice(i, 1)
            studentListGet()

        }
    }

}





