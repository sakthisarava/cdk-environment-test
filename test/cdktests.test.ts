import * as cdk from '@aws-cdk/core';
import { CdktestsStack } from '../lib/cdktests-stack'
test('ELB health check path is using Spring Boot endpoint', () => {
    const app = new cdk.App();

    const stack = new Cdktests.CdktestsStack(app, 'MyTestStack');

    expectCDK(stack).to(haveResource("AWS::ElasticLoadBalancingV2::TargetGroup",{
        HealthCheckPath: '/actuator/health'
    }));
});
