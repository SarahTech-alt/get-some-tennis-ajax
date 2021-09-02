$(document).ready(onReady);

function onReady() {
    // load data from the server, put it on the DOM
    getTournamentData();
    $('#add-button').on('click', postPlayerData);
    getPlayerData();
}

// get player data from the server
function getPlayerData() {
    $.ajax({
        type: 'GET',
        url: '/players'
    }).then(function (response) {
       $('#playerTableBody').empty();
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let player = response[i];
            $('#playerTableBody').append(`
                <tr>
                    <td>${player.firstName}</td>
                    <td>${player.lastName}</td>
                    <td>${player.born}</td>
                </tr>
            `);
        }
    });
}

// function appendPlayerData(response) {
//     $('#playerTableBody').empty();
//     // append data to the DOM
//     for (let i = 0; i < response.length; i++) {
//         let player = response[i];
//         $('#playerTableBody').append(`
//             <tr>
//                 <td>${player.firstName}</td>
//                 <td>${player.lastName}</td>
//                 <td>${player.born}</td>
//             </tr>
//         `);
//     }
// }

function postPlayerData() {
    $.ajax({
        method: 'POST',
        url: '/players',
        data: {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            born: $('#born').val(),
        },
    }).then(handlePostSuccess).catch(postError);
}

function handlePostSuccess() {
    // $('input').val('');
    // console.log($('#playerTableData').val());
   // $('#playerTableData').empty('');
    getPlayerData();
}

function postError() {
    alert('oops!!!');
}

// get tournament data from the server
function getTournamentData() {
    $.ajax({
        type: 'GET',
        url: '/tournaments'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let tournament = response[i];
            $('#tournamentTableBody').append(`
                <tr>
                    <td>${tournament.name}</td>
                    <td>${tournament.location}</td>
                </tr>
            `);
        }
    });
}