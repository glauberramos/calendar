var data =  [ 
  {
    date: '08/21/2015',
    name: 'braziljs'
  },
  {
    date: '08/22/2015',
    name: 'braziljs'
  },
  {
    date: '08/22/2015',
    name: 'formatura mano'
  },
  {
    date: '09/12/2015',
    name: 'UX conf br'
  },
  {
    date: '11/11/2015',
    name: 'Pearl Jam'
  },
  {
    date: '12/04/2015',
    name: 'Casamento diego betina'
  },
  {
    date: '12/10/2015',
    name: 'Recital paiva'
  }
];

function convertDate(rawDate) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
  var date = new Date(rawDate);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year; 
}

var List = React.createClass({
    render: function() {
        return (<div>
        { this.props.data.map(function(item) {
                return <li>{convertDate(item.date)} - {item.name}</li>
            })
        }
        </div>);
    }
});

React.render(<List data={ data }  />, document.getElementById('calendar-list'));
