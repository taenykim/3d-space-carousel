type Handler<T> = (data: T) => void;
type ObserverEvent<T> = {
  eventName: string;
  handler: Handler<T>;
  context: any;
};

class Observer<T> {
  private context: ObserverEvent<T>[] = [];

  register(_eventName: string, _handler: Handler<T>, _context: any) {
    this.context.push({
      eventName: _eventName,
      handler: _handler,
      context: _context
    });
  }

  unregister(_eventName: string) {
    this.context = this.context.filter(
      contextItem => contextItem.eventName !== _eventName
    );
  }

  notify(_eventName: string, _data: T) {
    const finedContextList = this.context.filter(
      contextNode => contextNode.eventName === _eventName
    );
    if (0 < finedContextList.length) {
      finedContextList.forEach(finedContext =>
        finedContext.handler.call(finedContext.context, _data)
      );
    }
  }
}

const observer = new Observer();
export default observer;
