type EventCallback<T = any> = (data: T) => void;

interface EventSubscription {
  unsubscribe: () => void;
}

class WorklyEventBus {
  private events: Map<string, Set<EventCallback>>;

  constructor() {
    this.events = new Map();
  }

  /**
   * Subscribe to an event
   */
  on<T = any>(event: string, callback: EventCallback<T>): EventSubscription {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    const callbacks = this.events.get(event)!;
    callbacks.add(callback as EventCallback);

    return {
      unsubscribe: () => this.off(event, callback),
    };
  }

  /**
   * Subscribe to an event (one-time only)
   */
  once<T = any>(event: string, callback: EventCallback<T>): EventSubscription {
    const wrappedCallback = (data: T) => {
      callback(data);
      this.off(event, wrappedCallback);
    };

    return this.on(event, wrappedCallback);
  }

  /**
   * Unsubscribe from an event
   */
  off<T = any>(event: string, callback?: EventCallback<T>): void {
    if (!callback) {
      // Remove all callbacks for this event
      this.events.delete(event);
      return;
    }

    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.delete(callback as EventCallback);
      
      // Clean up empty event sets
      if (callbacks.size === 0) {
        this.events.delete(event);
      }
    }
  }

  /**
   * Emit an event
   */
  emit<T = any>(event: string, data?: T): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach((callback) => {
        try {
          callback(data);
        } catch (error) {
          console.error(`Error in event callback for "${event}":`, error);
        }
      });
    }
  }

  /**
   * Check if event has listeners
   */
  hasListeners(event: string): boolean {
    const callbacks = this.events.get(event);
    return callbacks ? callbacks.size > 0 : false;
  }

  /**
   * Get number of listeners for an event
   */
  listenerCount(event: string): number {
    const callbacks = this.events.get(event);
    return callbacks ? callbacks.size : 0;
  }

  /**
   * Remove all event listeners
   */
  clear(): void {
    this.events.clear();
  }

  /**
   * Get all registered event names
   */
  eventNames(): string[] {
    return Array.from(this.events.keys());
  }
}

// Create singleton instance
export const eventBus = new WorklyEventBus();

// Export class for testing or custom instances
export { WorklyEventBus };

