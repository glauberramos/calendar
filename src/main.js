var data =  [ 
  {
    date: '21 agosto',
    name: 'braziljs'
  },
  {
    date: '22 agosto',
    name: 'braziljs'
  },
  {
    date: '22 agosto',
    name: 'formatura mano'
  },
  {
    date: '12 setembro',
    name: 'UX conf br'
  },
  {
    date: '11 novembro',
    name: 'Pearl Jam'
  },
  {
    date: '4 dezembro',
    name: 'Casamento diego betina'
  },
  {
    date: '10 dezembro',
    name: 'Recital paiva'
  }
];

var List = React.createClass({
    render: function() {
        return (<div>
        { this.props.data.map(function(item) {
                return <li>{item.date} - {item.name}</li>
            })
        }
        </div>);
    }
});

React.render(<List data={ data }  />, document.getElementById('calendar-list'));
