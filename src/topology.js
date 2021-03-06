module.exports = {
  "description": "Simple topo",
  "name": "simple",
  "nodes": [
      {
            "label_dx": null,
            "label_dy": null,
            "label_position": "top",
            "name": "Node1",
            "type": "esnet_site",
            "x": 100,
            "y": 20,
          },
      {
            "label_dx": null,
            "label_dy": null,
            "label_position": "top",
            "name": "Node2",
            "site": 5,
            "type": "esnet_site",
            "x": 50,
            "y": 80,
          },
      {
            "label_dx": null,
            "label_dy": null,
            "label_position": "top",
            "name": "Node3",
            "site": 5,
            "type": "hub",
            "x": 150,
            "y": 80,
          }
    ],
  "edges": [
      {
            "capacity": "100G",
            "source": "Node1",
            "target": "Node2"
          },
      {
            "capacity": "40G",
            "source": "Node2",
            "target": "Node3"
          },
      {
            "capacity": "10G",
            "source": "Node3",
            "target": "Node1"
          }
    ]
};
