var List = React.createClass({displayName: "List",
    render: function() {
        return (React.createElement("div", null, 
         this.props.data.map(function(item) {
                return React.createElement("div", null, item)
            })
        
        ));
    }
});

var data =  ['red', 'green', 'blue'];

React.render(React.createElement(List, {data:  data }), document.body);
