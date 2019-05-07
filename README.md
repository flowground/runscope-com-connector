# ![LOGO](logo.png) Runscope **flow**ground Connector

## Description

A generated **flow**ground connector for the Runscope API (version 1.0.0).

Generated from: https://api.apis.guru/v2/specs/runscope.com/1.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:43:56+03:00

## API Description

Manage Runscope programmatically.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Account Resource

> Information about the authorized account.

*Tags:* `Account`

### Returns a list of buckets.

*Tags:* `Buckets`

### Create a new bucket

*Tags:* `Buckets`

### Delete a single bucket resource.

*Tags:* `Buckets`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Returns a single bucket resource.

*Tags:* `Buckets`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Returns list of shared environments for a specified bucket.

*Tags:* `Shared Environments`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Create new shared environment.

*Tags:* `Shared Environments`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Update the details of a shared environment.

*Tags:* `Shared Environments`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `environmentId` - _required_ - Unique identifier for a test environment

### Retrieve a list of error messages in a bucket

*Tags:* `Messages`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `count` - _optional_ - Maxiumum number of messages to return. Default 50, max 1000.
* `since` - _optional_ - Only return messages after the given Unix timestamp
* `before` - _optional_ - Only return messages before the given Unix timestamp

### Clear a bucket (remove all messages).

*Tags:* `Messages`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Retrieve a list of messages in a bucket

*Tags:* `Messages`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `count` - _optional_ - Maxiumum number of messages to return. Default 50, max 1000.
* `since` - _optional_ - Only return messages after the given Unix timestamp
* `before` - _optional_ - Only return messages before the given Unix timestamp

### Create a message

*Tags:* `Messages`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Retrieve the details for a single message.

*Tags:* `Messages`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `messageId` - _required_ - The unique identifier for this message

### Returns a list of tests.

*Tags:* `Tests`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Create a test.

*Tags:* `Tests`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket

### Delete a test, including all steps, schedules, test-specific environments and results.

*Tags:* `Tests`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### Retrieve the details of a given test by ID.

*Tags:* `Tests`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### Modify a test's name, description, default environment and its steps. To modify other individual properties of a test, make requests to the steps, environments, and schedules subresources of the test.

*Tags:* `Tests`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### Return details of the test's environments (only those that belong to the specified test)

*Tags:* `Test Environments`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### Create new test environment.

*Tags:* `Test Environments`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### Update the details of a test environment.

*Tags:* `Test Environments`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test
* `environmentId` - _required_ - Unique identifier for a test environment

### Return details of the test metrics for the specified timeframe.

*Tags:* `Tests`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### List test steps for a test.

*Tags:* `Test Steps`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### Add new test step.

*Tags:* `Test Steps`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test

### Delete a step from a test.

*Tags:* `Test Steps`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test
* `stepId` - _required_ - Unique identifier for a test step

### Update the details of a single test step.

*Tags:* `Test Steps`

#### Input Parameters
* `bucketKey` - _required_ - Unique identifier for a bucket
* `testId` - _required_ - Unique identifier for a test
* `stepId` - _required_ - Unique identifier for a test step

### Team agents list

> List currently connected agents associated with a given team.

*Tags:* `Account`

#### Input Parameters
* `teamId` - _required_ - Unique identifier for team

### Team integrations list

> Returns a list of integrations configured for the team.

*Tags:* `Account`

#### Input Parameters
* `teamId` - _required_ - Unique identifier for team

### Teams Resource

> List people and integrations associated with a given team.

*Tags:* `Account`

#### Input Parameters
* `teamId` - _required_ - Unique identifier for team

## License

**flow**ground :- Telekom iPaaS / runscope-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
