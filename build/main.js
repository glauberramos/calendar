var data =  [ 
  {
    date: '21/08/2015',
    name: 'braziljs'
  },
  {
    date: '22/08/2015',
    name: 'braziljs'
  },
  {
    date: '22/08/2015',
    name: 'formatura mano'
  },
  {
    date: '12/09/2015',
    name: 'UX conf br'
  },
  {
    date: '11/11/2015',
    name: 'Pearl Jam'
  },
  {
    date: '04/12/2015',
    name: 'Casamento diego betina'
  },
  {
    date: '10/12/2015',
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
