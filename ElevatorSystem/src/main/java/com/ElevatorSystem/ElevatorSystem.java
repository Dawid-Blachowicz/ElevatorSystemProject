package com.ElevatorSystem;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.abs;

@Component
public class ElevatorSystem {
    private final List<Elevator> elevators;
    private int elevatorsNumber;
    private int floorsNumber;

    public ElevatorSystem() {
        elevators = new ArrayList<>(elevatorsNumber);
    }

    public void init() {
        for(int i = 0; i < elevatorsNumber; i++) {
            elevators.add(new Elevator(i));
        }
    }

    public void pickup(int destinationFloor, int currentFloor) {
        Destination destination = checkDestination(destinationFloor, currentFloor);
        int minDistance = abs(elevators.get(0).getCurrentFloor() - destinationFloor);
        int id = elevators.get(0).getId();
        for(Elevator elevator : elevators) {
            if(elevator.getDestination() == destination) {
                if(destination == Destination.UP) {
                    if(elevator.getCurrentFloor() <= currentFloor) {
                        elevator.addDestinationFloor(destinationFloor);
                        elevator.addDestinationFloor(currentFloor);
                        try {
                            elevator.start();
                        }catch (InterruptedException e) {
                            e.getCause();
                        }
                        return;
                    }
                }
                else {
                    if(elevator.getCurrentFloor() >= currentFloor) {
                        elevator.addDestinationFloor(destinationFloor);
                        elevator.addDestinationFloor(currentFloor);
                        try {
                            elevator.start();
                        }catch (InterruptedException e) {
                            e.getCause();
                        }
                        return;
                    }
                }
            }
            else if(elevator.getDestination().equals(Destination.STATIC)) {
                if(destination == Destination.UP) {
                    if(elevator.getCurrentFloor() <= currentFloor) {
                        elevator.addDestinationFloor(destinationFloor);
                        elevator.addDestinationFloor(currentFloor);
                        elevator.setDestination();
                        elevator.setDestinationFloor();
                        try {
                            elevator.start();
                        }catch (InterruptedException e) {
                            e.getCause();
                        }
                        return;
                    }
                }
                else {
                    if(elevator.getCurrentFloor() >= currentFloor) {
                        elevator.addDestinationFloor(destinationFloor);
                        elevator.addDestinationFloor(currentFloor);
                        elevator.setDestination();
                        try {
                            elevator.start();
                        }catch (InterruptedException e) {
                            e.getCause();
                        }
                        return;
                    }
                }
            }
            else {
                if(abs(elevator.getCurrentFloor() - destinationFloor) < minDistance) {
                    minDistance = abs(elevator.getCurrentFloor() - destinationFloor);
                    id = elevator.getId();
                }
            }
        }
        elevators.get(id).addDestinationFloor(destinationFloor);
        elevators.get(id).setDestinationFloor(currentFloor);
        elevators.get(id).setDestination();
        try {
            elevators.get(id).start();
        }catch (InterruptedException e) {
            e.getCause();
        }
    }

    private Destination checkDestination(int destinationFloor, int currentFloor) {
        if(destinationFloor > currentFloor) {
            return Destination.UP;
        }
        return Destination.DOWN;
    }

    public void setElevatorsNumber(int elevatorsNumber) {
        this.elevatorsNumber = elevatorsNumber;
    }

    public void setFloorsNumber(int floorsNumber) {
        this.floorsNumber = floorsNumber;
    }

    public Elevator getById(int id) {
        return elevators.get(id);
    }

    public int getFloorsNumber() {
        return floorsNumber;
    }

    public int getElevatorsNumber() {
        return elevatorsNumber;
    }
}
