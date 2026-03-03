import { humanosMockClient } from '@/lib/humanos-mock-sdk';

/** 
 * Humanos Foundation - Sovereign API Client
 * This client previously depended on @base44/sdk, but has been 
 * migrated to a local-first mock client to ensure complete 
 * data sovereignty and removal of external tracking.
 */
export const base44 = humanosMockClient;
