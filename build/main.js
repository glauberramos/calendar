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

var List = React.createClass({displayName: "List",
    render: function() {
        return (React.createElement("div", null, 
         this.props.data.map(function(item) {
                return React.createElement("li", null, item.date, " - ", item.name)
            })
        
        ));
    }
});

React.render(React.createElement(List, {data:  data }), document.getElementById('calendar-list'));
