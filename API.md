# AWS Daily CloudWatch Log Archiver

AWS CloudWatch Logs daily(13:00Z) archive to s3 bucket.

## Resources

This construct creating resource list.

- S3 Bucket (log-archive-xxxxxxxx from @yicr/aws-secure-log-bucket)
- Lambda function execution role
- Lambda function
- EventBridge Scheduler execution role
- EventBridge Scheduler Group
- EventBridge Scheduler (this construct props specified count)

## Install

### TypeScript

```shell
npm install @yicr/aws-daily-cloud-watch-log-archiver
```
or
```shell
yarn add @yicr/aws-daily-cloud-watch-log-archiver
```

## Example

```shell
npm install @yicr/aws-daily-cloud-watch-log-archiver
```

```typescript
import { DailyCloudWatchLogArchiver } from '@yicr/aws-daily-cloud-watch-log-archiver';

new DailyCloudWatchLogArchiver(stack, 'DailyCloudWatchLogArchiver', {
  schedules: [
    {
      name: 'example-log-archive-1st-rule',
      description: 'example log archive 1st rule.',
      target: {
        logGroupName: 'example-log-1st-group', // always created CloudWatch Log group
        destinationPrefix: 'example-1st-log',
      },
    },
    {
      name: 'example-log-archive-2nd-rule',
      description: 'example log archive 2nd rule.',
      target: {
        logGroupName: 'example-log-2nd-group',
        destinationPrefix: 'example-2nd-log',
      },
    },
  ],
});

```

## License

This project is licensed under the Apache-2.0 License.

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DailyCloudWatchLogArchiver <a name="DailyCloudWatchLogArchiver" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver"></a>

#### Initializers <a name="Initializers" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer"></a>

```typescript
import { DailyCloudWatchLogArchiver } from '@yicr/aws-daily-cloud-watch-log-archiver'

new DailyCloudWatchLogArchiver(scope: Construct, id: string, props: DailyCloudWatchLogArchiverProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.props">props</a></code> | <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps">DailyCloudWatchLogArchiverProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.Initializer.parameter.props"></a>

- *Type:* <a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps">DailyCloudWatchLogArchiverProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.isConstruct"></a>

```typescript
import { DailyCloudWatchLogArchiver } from '@yicr/aws-daily-cloud-watch-log-archiver'

DailyCloudWatchLogArchiver.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### DailyCloudWatchLogArchiverProps <a name="DailyCloudWatchLogArchiverProps" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps"></a>

#### Initializer <a name="Initializer" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.Initializer"></a>

```typescript
import { DailyCloudWatchLogArchiverProps } from '@yicr/aws-daily-cloud-watch-log-archiver'

const dailyCloudWatchLogArchiverProps: DailyCloudWatchLogArchiverProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.property.schedules">schedules</a></code> | <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty">ScheduleProperty</a>[]</code> | *No description.* |

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="@yicr/aws-daily-cloud-watch-log-archiver.DailyCloudWatchLogArchiverProps.property.schedules"></a>

```typescript
public readonly schedules: ScheduleProperty[];
```

- *Type:* <a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty">ScheduleProperty</a>[]

---

### ScheduleProperty <a name="ScheduleProperty" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty"></a>

#### Initializer <a name="Initializer" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty.Initializer"></a>

```typescript
import { ScheduleProperty } from '@yicr/aws-daily-cloud-watch-log-archiver'

const scheduleProperty: ScheduleProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.target">target</a></code> | <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty">ScheduleTargetProperty</a></code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleProperty.property.target"></a>

```typescript
public readonly target: ScheduleTargetProperty;
```

- *Type:* <a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty">ScheduleTargetProperty</a>

---

### ScheduleTargetProperty <a name="ScheduleTargetProperty" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty"></a>

#### Initializer <a name="Initializer" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.Initializer"></a>

```typescript
import { ScheduleTargetProperty } from '@yicr/aws-daily-cloud-watch-log-archiver'

const scheduleTargetProperty: ScheduleTargetProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.destinationPrefix">destinationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.logGroupName">logGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `destinationPrefix`<sup>Required</sup> <a name="destinationPrefix" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.destinationPrefix"></a>

```typescript
public readonly destinationPrefix: string;
```

- *Type:* string

---

##### `logGroupName`<sup>Required</sup> <a name="logGroupName" id="@yicr/aws-daily-cloud-watch-log-archiver.ScheduleTargetProperty.property.logGroupName"></a>

```typescript
public readonly logGroupName: string;
```

- *Type:* string

---



