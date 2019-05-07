/**
 * Auto-generated action file for "Runscope" API.
 *
 * Generated at: 2019-05-07T14:43:56.707Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / runscope-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/buckets/{bucketKey}/tests/{testId}/environments/{environmentId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "bucketKey",
    "testId",
    "environmentId"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "bucketKey": "bucketKey",
    "testId": "testId",
    "environmentId": "environmentId",
    "auth": "auth",
    "client_certificate": "client_certificate",
    "emails": "emails",
    "exported_at": "exported_at",
    "headers": "headers",
    "id": "id",
    "initial_script_hash": "initial_script_hash",
    "initial_variables": "initial_variables",
    "integrations": "integrations",
    "name": "name",
    "parent_environment_id": "parent_environment_id",
    "preserve_cookies": "preserve_cookies",
    "regions": "regions",
    "remote_agents": "remote_agents",
    "retry_on_failure": "retry_on_failure",
    "script": "script",
    "script_library": "script_library",
    "stop_on_failure": "stop_on_failure",
    "test_id": "test_id",
    "verify_ssl": "verify_ssl",
    "version": "version",
    "webhooks": "webhooks",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['runscope_auth'] = {token: cfg['runscope_auth']};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/buckets/{bucketKey}/tests/{testId}/environments/{environmentId}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}