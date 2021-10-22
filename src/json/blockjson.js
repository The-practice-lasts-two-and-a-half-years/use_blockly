//com配置====================================================
let readdijson = {
    "type": "dudi",
    "message0": "读DI %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "DI_0",
            "DI_0"
          ],
          [
            "DI_1",
            "DI_1"
          ],
          [
            "DI_2",
            "DI_2"
          ]
        ]
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks['readdi'] = {
    init:function(){
        this.jsonInit(readdijson)
    }
}

let readaijson = {
    "type": "duai",
    "message0": "读AI %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "AI_0",
            "AI_0"
          ],
          [
            "AI_1",
            "AI_1"
          ],
          [
            "AI_2",
            "AI_2"
          ]
        ]
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks['readai'] = {
    init:function(){
        this.jsonInit(readaijson)
    }
}

let writedijson = {
    "type": "duai",
    "message0": "写DO %1 状态 %2",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "NAME",
        "options": [
          [
            "AI_0",
            "AI_0"
          ],
          [
            "AI_1",
            "AI_1"
          ],
          [
            "AI_2",
            "AI_2"
          ]
        ]
      },
      {
        "type": "field_dropdown",
        "name": "NAME2",
        "options": [
          [
            "0",
            "0"
          ],
          [
            "1",
            "1"
          ],
        ]
      },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks['writedi'] = {
    init:function(){
        this.jsonInit(writedijson)
    }
}

let readdialljson = {
    "type": "diall",
    "message0": "读DI全部",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks['diall'] = {
    init:function(){
        this.jsonInit(readdialljson)
    }
}

let writedialljson = {
    "type": "writediall",
    "message0": "写DI全部 %1",
    "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
          ]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks['writediall'] = {
    init:function(){
        this.jsonInit(writedialljson)
    }
}

let readdoalljson = {
    "type": "doall",
    "message0": "读DO全部",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks['doall'] = {
    init:function(){
        this.jsonInit(readdoalljson)
    }
}

let writedoalljson = {
    "type": "writedoall",
    "message0": "写DO全部 %1",
    "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
          ]
        },
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
Blockly.Blocks['writedoall'] = {
    init:function(){
        this.jsonInit(writedoalljson)
    }
}
//自定义块
  Blockly.JavaScript['readdi'] = function(block) {
    
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['readai'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['writedi'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['diall'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['writediall'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['doall'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['writedoall'] = function(block) {
    var code = '...;\n';
    return code;
};
//com配置 END====================================================

//控制 ====================================================
let ifjson = {
    "type": "if",
    "message0": "如果 %1 执行 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_statement",
        "name": "NAME2"
      }
    ],
    "previousStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['if'] = {
    init:function(){
        this.jsonInit(ifjson)
    }
}

let elifjson = {
    "type": "elif",
    "message0": "如果 %1 执行 %2 否则 %3",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_statement",
        "name": "NAME2"
      },
      {
        "type": "input_statement",
        "name": "NAME3"
      }
    ],
    "previousStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['elif'] = {
    init:function(){
        this.jsonInit(elifjson)
    }
}

let forjson = {
    "type": "for",
    "message0": "循环执行 %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['for'] = {
    init:function(){
        this.jsonInit(forjson)
    }
}

let breakjson = {
    "type": "break",
    "message0": "跳出循环",
    "previousStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['break'] = {
    init:function(){
        this.jsonInit(breakjson)
    }
}

let fornextjson = {
    "type": "fornext",
    "message0": "执行下一次循环 %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "previousStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['fornext'] = {
    init:function(){
        this.jsonInit(fornextjson)
    }
}

let ifforjson = {
    "type": "iffor",
    "message0": "如果 %1 循环 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "NAME"
      },
      {
        "type": "input_statement",
        "name": "NAME2"
      }
    ],
    "previousStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['iffor'] = {
    init:function(){
        this.jsonInit(ifforjson)
    }
}

let tempforjson = {
    "type": "tempfor",
    "message0": "设置 %1次 循环 %2",
    "args0": [
      {
        "type": "field_number",
        "name": "NAME",
        "value":1
      },
      {
        "type": "input_statement",
        "name": "NAME2"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "colour": 120,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['tempfor'] = {
    init:function(){
        this.jsonInit(tempforjson)
    }
}
//自定义块
Blockly.JavaScript['if'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['elif'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['for'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['break'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['fornext'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['iffor'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['tempfor'] = function(block) {
    var code = '...;\n';
    return code;
};
//控制 END====================================================

//定时器 ===============================================
let timeoutjson = {
    "type": "timeout",
    "message0": "定时器 %1 时长 %2h %3执行 %4 执行次数 %5",
    "args0": [
      {
        "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
          ]
      },
      {
          "type": "field_dropdown",
          "name": "NAME2",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
          ]
      },
      {
        "type": "input_dummy",
        "name": "NAME3"
      },
      {
        "type": "input_statement",
        "name": "NAME4"
      },
      {
        "type": "field_dropdown",
          "name": "NAME5",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
          ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['timeout'] = {
    init:function(){
        this.jsonInit(timeoutjson)
    }
}

let cleartimeoutjson = {
    "type": "cleartimeout",
    "message0": "中断定时器 %1",
    "args0": [
      {
        "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
          ]
      },
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['cleartimeout'] = {
    init:function(){
        this.jsonInit(cleartimeoutjson)
    }
}

//自定义块
Blockly.JavaScript['timeout'] = function(block) {
    var code = '...;\n';
    return code;
};
  Blockly.JavaScript['cleartimeout'] = function(block) {
    var code = '...;\n';
    return code;
};

//定时器 END===============================================

//延时 ===========================================

let delayjson = {
    "type": "delay",
    "message0": "延时%1毫秒",
    "args0": [
      {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1000",
              "1000"
            ],
          ]
      },
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 345,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['delay'] = {
    init:function(){
        this.jsonInit(delayjson)
    }
}

//自定义块
Blockly.JavaScript['delay'] = function(block) {
    var code = '...;\n';
    return code;
};

//延时 END===========================================

//通讯 ===========================================
let messagejson = {
    "type": "message",
    "message0": "%1写%2",
    "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1000",
              "1000"
            ],
          ]
        },
        {
            "type": "field_dropdown",
            "name": "NAME2",
            "options": [
              [
                "0",
                "0"
              ],
              [
                "1000",
                "1000"
              ],
            ]
          },
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 30,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['message'] = {
    init:function(){
        this.jsonInit(messagejson)
    }
}
//自定义块
Blockly.JavaScript['message'] = function(block) {
    var code = '...;\n';
    return code;
};
  
//通讯 END===========================================

//储存 ========================================
let readlocaljson = {
    "type": "message",
    "message0": "读%1地址%2",
    "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1000",
              "1000"
            ],
          ]
        },
        {
            "type": "field_dropdown",
            "name": "NAME2",
            "options": [
              [
                "0",
                "0"
              ],
              [
                "1000",
                "1000"
              ],
            ]
          },
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['readlocal'] = {
    init:function(){
        this.jsonInit(readlocaljson)
    }
}
let writelocaljson = {
    "type": "writelocal",
    "message0": "写%1地址%2",
    "args0": [
        {
          "type": "field_dropdown",
          "name": "NAME",
          "options": [
            [
              "0",
              "0"
            ],
            [
              "1000",
              "1000"
            ],
          ]
        },
        {
            "type": "field_dropdown",
            "name": "NAME2",
            "options": [
              [
                "0",
                "0"
              ],
              [
                "1000",
                "1000"
              ],
            ]
          },
      
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": "",
}
Blockly.Blocks['writelocal'] = {
    init:function(){
        this.jsonInit(writelocaljson)
    }
}

//自定义块
Blockly.JavaScript['readlocal'] = function(block) {
    var code = '...;\n';
    return code;
};
Blockly.JavaScript['writelocal'] = function(block) {
    var code = '...;\n';
    return code;
};


//初始块
let initjson = {
  "type": "initprogram",
  "message0": " 初始化%1  %2",
  "args0": [
    {
      "type":"input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": 285,
  "tooltip": "",
  "helpUrl": "",
}
Blockly.Blocks['initprogram'] = {
  init:function(){
      this.jsonInit(initjson)
  }
}

let reusejson = {
  "type": "reuse",
  "message0": " 重复执行%1  %2",
  "args0": [
    {
      "type":"input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME",
    },
  ],
  "inputsInline": true,
  "previousStatement": null,
  "colour": 285,
  "tooltip": "",
  "helpUrl": "",
}
Blockly.Blocks['reuse'] = {
  init:function(){
      this.jsonInit(reusejson)
  }
}
//自定义块
Blockly.JavaScript['initprogram'] = function(block) {
  var code = '...;\n';
  return code;
};
Blockly.JavaScript['reuse'] = function(block) {
  var code = '...;\n';
  return code;
};