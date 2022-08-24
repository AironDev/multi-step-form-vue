$(document).ready(function () {

    (async function(){

        try
        {
            // set the access header
            const header = {
                "x-access-token" : "C1GPDpBEpulOV4RRT3tqoECTCc5Bc6hPun8BdLreMC"
            };

            // get mode
            const mode = location.href.indexOf('localhost') !== false || location.href.indexOf('127.0.0.1') ? 'local' : 'prod';

            // set the endpoint url
            const url = mode == 'local' ? 'http://localhost:3001' : '';

            // load result
            const result = await axios({
                method : 'get',
                url : url + '/shared/registered',
                headers : header
            });

            // get the table body
            let tableBody = document.getElementById('table-body');

            if (result.status == 200)
            {
                result.data.data.forEach((record, index)=>{

                    let td = `
                    <td>${record.personal.firstname}</td>
                    <td>${record.personal.sex}</td>
                    <td>${record.personal.age}</td>
                    <td>${record.personal.occupation}</td>
                    <td>${record.budget.budget}</td>
                    <td>${record.budget.how_urgent}</td>
                    <td><button class="view-btn" data-view="${index}">View</button></td>
                    `,
                    tr = document.createElement('tr');

                    // append child
                    tr.innerHTML = td;

                    // add to table body
                    tableBody.appendChild(tr);
                });

                // manage view button
                [].forEach.call(document.querySelectorAll('[data-view]'), (view)=>{

                    view.addEventListener('click', ()=>{
                        
                        let id = view.getAttribute('data-view'),
                            content = result.data.data[id];

                        console.log(content);

                        // load modal
                        Swal.fire({
                            html: `
                            <ul class="view-information">
                                <li><img src="${content.documents.display_picture}"></li>
                                <li><b>Fullname:</b> <span>${content.personal.firstname}</span></li>
                                <li><b>Sex:</b> <span>${content.personal.sex}</span></li>
                                <li><b>Age:</b> <span>${content.personal.age}</span></li>
                                <li><b>Occupation:</b> <span>${content.personal.occupation}</span></li>
                                <li><b>Email:</b> <span>${content.account.email}</span></li>
                                <li><b>Urgency:</b> <span>${content.budget.how_urgent}</span></li>
                                <li><b>Budget:</b> <span>${content.budget.budget}</span></li>
                                <li><b>Is money ready:</b> <span>${content.budget.is_money_ready}</span></li>
                                <li><b>Type of house:</b> <span>${content.preference.type_of_house}</span></li>
                                <li><b>Type of worker:</b> <span>${content.preference.type_of_worker}</span></li>
                                <li><b>Preferred Gender:</b> <span>${content.preference.sex}</span></li>
                                <li><b>Number of housemates:</b> <span>${content.preference.no_of_housemates}</span></li>
                                <li><b>Open to mix living:</b> <span>${content.budget.open_to_mix_living}</span></li>
                            </ul>
                            `,
                        });
                    });
                    
                });

                // load data table
                $('#example').DataTable();
            }
        }
        catch(e)
        {
            console.log(e);
            // load data table
            $('#example').DataTable();
        }

    })();
    
});