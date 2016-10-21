import React from "react";

export class Request extends React.Component {
    render(){
        return(
            <div className="col-sm-10 col-sm-offset-1">
                <div className="row">
                    <div className="col-sm-4"><ChosenSelect items={this.state.Sources} id="Sources" placeholder="Select Source Node" /></div>
                    <div className="col-sm-4"><ChosenSelect items={this.state.SourcePorts} id="SourcePorts" placeholder="Select Source Port" /></div>
                    <div className="col-sm-4"><ChosenSelect items={this.state.Bandwidth} id="BandwidthSource" placeholder="Select Bandwidth" /></div>
                </div>
                <div className="row">
                    <div className="col-sm-4"><ChosenSelect items={this.state.Sources} id="Destination" placeholder="Select Destination Node" /></div>
                    <div className="col-sm-4"><ChosenSelect items={this.state.DestinationPorts} id="DestinationPorts" placeholder="Select Destination Port" /></div>
                    <div className="col-sm-4"><ChosenSelect items={this.state.Bandwidth} id="BandwidthDestination" placeholder="Select Bandwidth" /></div>
                </div>
            </div>
        );
    }
    componentDidMount(){
        $.ajax({
            url:"./json/topology.json",
            dataType:"json",
            success:function(result){
                    let topo = parseTopology(result);
                    this.setState({
                        Topology:topo,
                        Sources:topo.Nodes,
                    });
                }.bind(this)
        });
    }
    constructor(props,context){
        super(props,context);
        this.state = {
            Sources:[],
            SourcePorts:[],
            Bandwidth:[],
            DestinationPorts:[],
            Topology:{},
        };
    }
}

class ChosenSelect extends React.Component {
    render(){
        return(
            <div className="col-sm-10 col-xs-10 col-sm-offset-1 col-xs-offset-1">
                <div className="center-block">
                    <select id={this.props.id} data-placeholder={this.props.placeholder}>
                        <option></option>
                        {this.props.items.map((entry,i)=>{
                            return(<option value="entry" key={entry}>{entry}</option>);                        
                        })}
                    </select>
                </div>
            </div>
        );
    }
    componentDidMount(){
        $("#"+this.props.id).chosen({width: "100%",allow_single_deselect:true});
    }
    componentDidUpdate(){
        $("#"+this.props.id).trigger("chosen:updated");
    }
}

function parseTopology(json){
    let parsed_object = {};
    parsed_object['Nodes'] = [];
    for (let value of json.devices){
        parsed_object['Nodes'].push(value['urn']);
    }
    return(parsed_object);
}
