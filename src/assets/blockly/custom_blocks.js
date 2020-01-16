Blockly.defineBlocksWithJsonArray([
  {
    type: "begin",
    message0: "Begin",
    nextStatement: "any",
    colour: 180,
    tooltip: "begin statement"
  },
  {
    type: "move",
    message0: "Move by %1 steps %2 dscsd",
    args0: [
      {
        type: "field_number",
        name: "steps",
        value: 0
      },
      {
        type: "field_number",
        name: "steps2",
        value: 0
      }
    ],
    previousStatement: "any",
    nextStatement: "any",
    colour: 240,
    tooltip: "steps to move"
  },
  {
    type: "end",
    message0: "End %1",
    args0: [
      {
        type: "field_dropdown",
        name: "end_types",
        options: [
          ["Now", "now"],
          ["Later", "later"]
        ]
      }
    ],
    previousStatement: "any",
    colour: 60,
    tooltip: "end type"
  }
]);

Blockly.Blocks["string_length"] = {
  init: function() {
    this.appendValueInput("VALUE")
      .setCheck("String")
      .appendField("length of");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Returns number of letters in the provided text.");
    this.setHelpUrl("http://www.w3schools.com/jsref/jsref_length_string.asp");
  }
};

var mathChangeJson = {
  message0: "change %1 by %2",
  args0: [
    {
      type: "field_variable",
      name: "VAR",
      variable: "item",
      variableTypes: [""]
    },
    { type: "input_value", name: "DELTA", check: "Number" }
  ],
  previousStatement: null,
  nextStatement: null,
  colour: 230
};

Blockly.Blocks["math_change"] = {
  init: function() {
    this.jsonInit(mathChangeJson);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return 'Add a number to variable "%1".'.replace(
        "%1",
        thisBlock.getFieldValue("VAR")
      );
    });
  }
};
