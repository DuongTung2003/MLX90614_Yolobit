Blockly.Blocks['mlx90614_create'] = {
    init: function () {
        this.jsonInit(
            {
                "type": "mlx90614_create",
                "message0": Blockly.Msg.MLX90614_CREATE_MESSAGE0,
                "previousStatement": null,
                "nextStatement": null,

                "colour": "#0384fc",
                "tooltip": Blockly.Msg.MLX90614_CREATE_TOOLTIP,
                "helpUrl": Blockly.Msg.MLX90614_CREATE_HELPURL
            }
        );
    }
};

Blockly.Python['mlx90614_create'] = function (block) {


    // TODO: Assemble Python into code variable.
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, I2C';
    Blockly.Python.definitions_['import_mlx90614'] = 'import mlx90614';
    //lcd = LCD1602(I2C(scl=Pin(22), sda=Pin(21)), 0x27)
    var code = 'mlx = MLX90614(I2C(scl=Pin(22), sda=Pin(21)))';
    return code;
};

Blockly.Blocks['mlx90614_read_amb'] = {
    init: function () {
        this.jsonInit(
            {
                "message0": Blockly.Msg.MLX90614_READ_AMBIENT_MESSAGE0 ,
                "output": "Number",
                "colour": "#0384fc",
                "tooltip": Blockly.Msg.MLX90614_READ_AMBIENT_TOOLTIP,
                "helpUrl": Blockly.Msg.MLX90614_READ_AMBIENT_HELPURL
            }
        );
    }
};
Blockly.Python['mlx90614_read_amb'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'mlx.read_ambient_temp()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Blocks['mlx90614_read_obj'] = {
    init: function () {
        this.jsonInit(
            {
                "message0": Blockly.Msg.MLX90614_READ_OBJ_MESSAGE0 ,
                "output": "Number",
                "colour": "#0384fc",
                "tooltip": Blockly.Msg.MLX90614_READ_OBJ_TOOLTIP,
                "helpUrl": Blockly.Msg.MLX90614_READ_OBJ_HELPURL
            }
        );
    }
};
Blockly.Python['mlx90614_read_obj'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'read_object_temp()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};
