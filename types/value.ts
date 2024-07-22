// value class
export abstract class Value {
  displayName: string;
  description?: string;
  jsonKey: string;
  type: string;

  constructor(
    displayName: string,
    jsonKey: string,
    description?: string,
    type: string = "value"
  ) {
    this.displayName = displayName;
    this.jsonKey = jsonKey;
    this.description = description;
    this.type = type;
  }

  toJson(): any {
    return { [this.jsonKey]: this.getValue() };
  }

  abstract getValue(): any;
}

export class TableValue extends Value {
  value: any[];

  constructor(
    displayName: string,
    jsonKey: string,
    description?: string,
    value: any[] = []
  ) {
    super(displayName, jsonKey, description, "table");
    this.value = value;
  }

  getValue(): any {
    return this.value;
  }
}

export class CharactorSequenceingTrials extends TableValue {
  constructor(value: any[]) {
    super("Trials", "trials", "Trials", value);
    this.value = value;
  }
}

export class AccuracyValue extends Value {
  value: number;

  constructor(value: number) {
    super("Accuracy", "accuracy", "Percentage of correct responses");
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}

export class AvrageAccuracyValue extends Value {
  value: number;

  constructor(value: number) {
    super(
      "Avrage Accuracy",
      "avrageAccuracy",
      "Average accuracy of all trials"
    );
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}

export class AvrageTrialTime extends Value {
  value: number;

  constructor(value: number) {
    super(
      "Avrage Trial Time",
      "avrageTrialTime",
      "Average time spent on each trial"
    );
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}

export class ElepsedTime extends Value {
  value: number;

  constructor(value: number) {
    super("Elepsed Time", "elepsedTime", "Actual time spent on training");
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}

export class TrialCount extends Value {
  value: number;

  constructor(value: number) {
    super("Trial Count", "trialCount", "Number of trials performed");
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}

export class CorrectCount extends Value {
  value: number;

  constructor(value: number) {
    super("Correct Count", "correctCount", "Number of correct responses");
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }
}
