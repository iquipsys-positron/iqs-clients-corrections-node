import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { CorrectionsNullClientV1 } from '../version1/CorrectionsNullClientV1';
import { CorrectionsDirectClientV1 } from '../version1/CorrectionsDirectClientV1';
import { CorrectionsHttpClientV1 } from '../version1/CorrectionsHttpClientV1';
import { CorrectionsLambdaClientV1 } from '../version1/CorrectionsLambdaClientV1';
import { CorrectionsHttpProxyClientV1 } from '../version1/CorrectionsHttpProxyClientV1';

export class CorrectionsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-corrections', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-corrections', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-corrections', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-corrections', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-corrections', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-corrections', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(CorrectionsClientFactory.NullClientV1Descriptor, CorrectionsNullClientV1);
		this.registerAsType(CorrectionsClientFactory.DirectClientV1Descriptor, CorrectionsDirectClientV1);
		this.registerAsType(CorrectionsClientFactory.HttpClientV1Descriptor, CorrectionsHttpClientV1);
		this.registerAsType(CorrectionsClientFactory.LambdaClientV1Descriptor, CorrectionsLambdaClientV1);
		this.registerAsType(CorrectionsClientFactory.HttpProxyClientV1Descriptor, CorrectionsHttpProxyClientV1);
	}
	
}
