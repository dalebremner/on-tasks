// Copyright © 2017 Dell Inc. or its subsidiaries. All Rights Reserved.

'use strict';

module.exports = {
    friendlyName: "Run Ansible",
    injectableName: "Task.Ansible",
    implementsTask: "Task.Base.Ansible",
    options: {
        playbook: null
    },
    properties: {}
};
