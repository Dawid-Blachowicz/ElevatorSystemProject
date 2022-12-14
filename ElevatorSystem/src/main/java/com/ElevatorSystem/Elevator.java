package com.ElevatorSystem;

import java.util.*;

import static java.lang.Thread.sleep;

public class Elevator {
    private final int id;
    private Destination destination;
    private int currentFloor;
    private int destinationFloor;
    private TreeSet<Integer> destinationFloors;

    public Elevator(int id) {
        this.id = id;
        destinationFloors = new TreeSet<>();
        destination = Destination.STATIC;
        currentFloor = 0;
    }

    public Destination getDestination() {
        return destination;
    }

    public void start() throws InterruptedException {
        while(!destinationFloors.isEmpty()){
            move();
        }
    }

    public void setDestination() {
        destination = currentFloor < destinationFloor ? Destination.UP : Destination.DOWN;
    }

    public int getCurrentFloor() {
        return currentFloor;
    }

    public void addDestinationFloor(int destinationFloor) {
        destinationFloors.add(destinationFloor);
    }

    private void move() throws InterruptedException {
        while(!isDestinationReached()) {
            step();
        }
        if(!destinationFloors.isEmpty()) {
            if (destinationFloors.first().equals(destinationFloor)) {
                destinationFloors.pollFirst();
            }
        }
        if(!destinationFloors.isEmpty()) {
            destinationFloor = destinationFloors.first();
            setDestination();
        }
    }

    private void step() throws InterruptedException {
        try {
            setDestination();
        }
        catch (NoSuchElementException e) {
            System.out.println("No destination!");
            return;
        }

        if(destination == Destination.UP) {
            currentFloor++;
        }
        else {
            currentFloor--;
        }
        sleep(1000);
    }

    public void setDestinationFloor(int destinationFloor) {
        this.destinationFloor = destinationFloor;
    }

    public void setDestinationFloor() {
        if(destination == Destination.UP) {
            setDestinationFloor(destinationFloors.first());
        }
        if(destination == Destination.DOWN) {
            setDestinationFloor(destinationFloors.last());
        }
    }

    public boolean isDestinationReached() {
        return currentFloor == destinationFloor;
    }

    public int getId() {
        return id;
    }
}
