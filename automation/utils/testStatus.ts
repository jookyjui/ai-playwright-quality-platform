
import type { TestInfo } from '@playwright/test';

export function logTestExecutionStatus(testInfo: TestInfo): void {
  if (
    testInfo.status === 'passed' &&
    testInfo.retry > 0
  ) {
    console.warn(
      `[FLAKY TEST] "${testInfo.title}" passed after ` +
      `${testInfo.retry} retry/retries.`
    );
  }

  if (testInfo.status !== testInfo.expectedStatus) {
    console.error(
      `[TEST FAILURE] "${testInfo.title}" | ` +
      `Expected: ${testInfo.expectedStatus} | ` +
      `Actual: ${testInfo.status} | ` +
      `Retry: ${testInfo.retry}`
    );
  }
}
